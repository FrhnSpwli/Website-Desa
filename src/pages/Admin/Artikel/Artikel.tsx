import { useState, useEffect, useMemo } from "react";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  AddBoxOutlined,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { doc } from "firebase/firestore";
import {
  IonAlert,
  IonButton,
  IonContent,
  IonPage,
  IonToast,
} from "@ionic/react";
4;

import Sidebar from "../../../components/organisms/Sidebar";

type Artikel = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const AdminArtikel = () => {
  const artikelRef = collection(db, "artikel");
  
  const [artikelList, setArtikelList] = useState<Artikel[]>([]);
  
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteArtikelId, setDeleteArtikelId] = useState<string | null>(null);
  
  const [showToast, setShowToast] = useState(false);
  
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      setIsAuth(true);
      console.log("token", token);
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const getArtikelList = async () => {
      try {
        const data = await getDocs(artikelRef);
        const items = data.docs.map((doc) => {
          const { title, description, date } = doc.data();
          const id = doc.id;
          return { id, title, description, date };
        });

        setArtikelList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getArtikelList();
  }, []);

  const deleteArtikel = async (id: string) => {
    setDeleteArtikelId(id);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteAlert(false);

    if (deleteArtikelId) {
      try {
        await deleteDoc(doc(db, "artikel", deleteArtikelId));
        setArtikelList(
          artikelList.filter((item) => item.id !== deleteArtikelId)
        );

        setShowToast(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: MRT_ColumnDef<Artikel>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Artikel ID",
        size: 150,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: artikelList,
    enableEditing: true,
    enableRowActions: true,
    enableRowSelection: false,
    positionActionsColumn: "last",
    muiTablePaperProps: {
      elevation: 0,
    },
    enableFullScreenToggle: false,
    enableStickyFooter: true,
    renderRowActions: ({ row }) => (
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          style={{ backgroundColor: "transparent", color: "gray" }}
          onClick={() => {
            window.location.href = `/admin/artikel/edit/${row.original.id}`;
          }}
        >
          <EditOutlined />
        </button>
        <button
          style={{ backgroundColor: "transparent", color: "red" }}
          onClick={() => deleteArtikel(row.original.id)}
        >
          <DeleteOutline />
        </button>
      </div>
    ),
  });

  return (
    <IonPage>
      <Sidebar />
      <IonContent>
        <div style={{ padding: "48px" }}>
          <IonAlert
            isOpen={showDeleteAlert}
            onDidDismiss={() => setShowDeleteAlert(false)}
            header={"Confirm Deletion"}
            message={"Are you sure you want to delete this artikel?"}
            buttons={[
              {
                text: "No",
                role: "cancel",
                cssClass: "secondary",
              },
              {
                text: "Yes",
                handler: handleDeleteConfirm,
              },
            ]}
          />
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Artikel deleted successfully!"
            duration={2000}
          />
          <IonButton
            onClick={() => (window.location.href = "/admin/artikel/create")}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <AddBoxOutlined />
              Create Artikel
            </div>
          </IonButton>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminArtikel;

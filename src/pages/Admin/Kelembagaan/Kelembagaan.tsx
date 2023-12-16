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

type Kelembagaan = {
  id: string;
  name: string;
  description: string;
  startFrom: string;
};

const AdminKelembagaan = () => {
  const kelembagaanRef = collection(db, "kelembagaan");

  const [kelembagaanList, setKelembagaanList] = useState<Kelembagaan[]>([]);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteKelembagaanId, setDeleteKelembagaanId] = useState<string | null>(
    null
  );

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
    const getkelembagaanList = async () => {
      try {
        const data = await getDocs(kelembagaanRef);
        const items = data.docs.map((doc) => {
          const { name, description, startFrom } = doc.data();
          const id = doc.id;
          return { id, name, description, startFrom };
        });

        setKelembagaanList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getkelembagaanList();
  }, []);

  const deleteKelembagaan = async (id: string) => {
    setDeleteKelembagaanId(id);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteAlert(false);

    if (deleteKelembagaanId) {
      try {
        await deleteDoc(doc(db, "kelembagaan", deleteKelembagaanId));
        setKelembagaanList(
          kelembagaanList.filter((item) => item.id !== deleteKelembagaanId)
        );

        setShowToast(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: MRT_ColumnDef<Kelembagaan>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nama Kelembagaan",
        size: 150,
      },
      {
        accessorKey: "startFrom",
        header: "Tanggal Pendirian",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Deskripsi",
        size: 500,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: kelembagaanList,
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
            window.location.href = `/admin/kelembagaan/edit/${row.original.id}`;
          }}
        >
          <EditOutlined />
        </button>
        <button
          style={{ backgroundColor: "transparent", color: "red" }}
          onClick={() => deleteKelembagaan(row.original.id)}
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
            message={"Are you sure you want to delete this kelembagaan?"}
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
            message="Kelembagaan deleted successfully!"
            duration={2000}
          />
          <IonButton
            onClick={() => (window.location.href = "/admin/kelembagaan/create")}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <AddBoxOutlined />
              Create Kelembagaan
            </div>
          </IonButton>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminKelembagaan;

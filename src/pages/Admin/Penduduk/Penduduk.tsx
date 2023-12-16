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

type Penduduk = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  email: string;
  gender: string;
  religion: string;
};

const AdminPenduduk = () => {
  const pendudukRef = collection(db, "penduduk");

  const [pendudukList, setPendudukList] = useState<Penduduk[]>([]);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deletePendudukId, setDeletePendudukId] = useState<string | null>(null);

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
    const getPendudukList = async () => {
      try {
        const data = await getDocs(pendudukRef);
        const items = data.docs.map((doc) => {
          const { firstName, lastName } = doc.data().name;
          const { address, email, gender, religion } = doc.data();
          const id = doc.id;
          return {
            id,
            name: {
              firstName,
              lastName,
            },
            address,
            email,
            gender,
            religion,
          };
        });

        setPendudukList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getPendudukList();
  }, []);

  const deletePenduduk = async (id: string) => {
    setDeletePendudukId(id);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteAlert(false);

    if (deletePendudukId) {
      try {
        await deleteDoc(doc(db, "penduduk", deletePendudukId));
        setPendudukList(
          pendudukList.filter((item) => item.id !== deletePendudukId)
        );

        setShowToast(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: MRT_ColumnDef<Penduduk>[] = useMemo(
    () => [
      {
        header: "Nama Depan",
        accessorKey: "name.firstName",
        size: 75,
      },
      {
        header: "Nama Belakang",
        accessorKey: "name.lastName",
        size: 75,
      },
      {
        header: "Alamat",
        accessorKey: "address",
        size: 200,
      },
      {
        header: "Email",
        accessorKey: "email",
        size: 150,
      },
      {
        header: "Jenis Kelamin",
        accessorKey: "gender",
        size: 100,
      },
      {
        header: "Agama",
        accessorKey: "religion",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: pendudukList,
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
            window.location.href = `/admin/penduduk/edit/${row.original.id}`;
          }}
        >
          <EditOutlined />
        </button>
        <button
          style={{ backgroundColor: "transparent", color: "red" }}
          onClick={() => deletePenduduk(row.original.id)}
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
            message={"Are you sure you want to delete this penduduk?"}
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
            message="Penduduk deleted successfully!"
            duration={2000}
          />
          <IonButton
            onClick={() => (window.location.href = "/admin/penduduk/create")}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <AddBoxOutlined />
              Create Penduduk
            </div>
          </IonButton>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminPenduduk;

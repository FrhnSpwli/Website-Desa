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
import { formatRupiah } from "../../../../utils/formatter";

type Pembangunan = {
  id: string;
  name: string;
  luas: number;
  biaya: string;
  lokasi: string;
  keterangan: string;
};

const AdminPembangunan = () => {
  const pembangunanRef = collection(db, "pembangunan");

  const [pembangunanList, setPembangunanList] = useState<Pembangunan[]>([]);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deletePembangunanId, setDeletePembangunanId] = useState<string | null>(
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
    const getPembangunanList = async () => {
      try {
        const data = await getDocs(pembangunanRef);
        const items = data.docs.map((doc) => {
          const { name, luas, biaya, lokasi, keterangan } = doc.data();
          const id = doc.id;
          return {
            id,
            name,
            luas,
            biaya: formatRupiah(biaya),
            lokasi,
            keterangan,
          };
        });

        setPembangunanList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getPembangunanList();
  }, []);

  const deleteKelembagaan = async (id: string) => {
    setDeletePembangunanId(id);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteAlert(false);

    if (deletePembangunanId) {
      try {
        await deleteDoc(doc(db, "pembangunan", deletePembangunanId));
        setPembangunanList(
          pembangunanList.filter(
            (pembangunan) => pembangunan.id !== deletePembangunanId
          )
        );

        setShowToast(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: MRT_ColumnDef<Pembangunan>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nama Pembangunan",
        size: 150,
      },
      {
        accessorKey: "luas",
        header: "Luas(m2)",
        size: 150,
      },
      {
        accessorKey: "biaya",
        header: "Biaya",
        size: 150,
      },
      {
        accessorKey: "lokasi",
        header: "Lokasi",
        size: 250,
      },
      {
        accessorKey: "keterangan",
        header: "Keterangan",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: pembangunanList,
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
            window.location.href = `/admin/pembangunan/edit/${row.original.id}`;
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
            message={"Are you sure you want to delete this Kelembagaan?"}
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
            message="Pembangunan deleted successfully!"
            duration={2000}
          />
          <IonButton
            onClick={() => (window.location.href = "/admin/pembangunan/create")}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <AddBoxOutlined />
              Create Pembangunan
            </div>
          </IonButton>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminPembangunan;

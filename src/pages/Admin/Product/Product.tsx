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

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const AdminProduct = () => {
  const productRef = collection(db, "product");
  
  const [productList, setproductList] = useState<Product[]>([]);
  
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  
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
    const getproductList = async () => {
      try {
        const data = await getDocs(productRef);
        const items = data.docs.map((doc) => {
          const { title, description, price } = doc.data();
          const id = doc.id;
          return { id, title, description, price };
        });

        setproductList(items);
      } catch (err) {
        console.error(err);
      }
    };

    getproductList();
  }, []);

  const deleteProduct = async (id: string) => {
    setDeleteProductId(id);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteAlert(false);

    if (deleteProductId) {
      try {
        await deleteDoc(doc(db, "product", deleteProductId));
        setproductList(
          productList.filter((item) => item.id !== deleteProductId)
        );

        setShowToast(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: MRT_ColumnDef<Product>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: productList,
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
            window.location.href = `/admin/product/edit/${row.original.id}`;
          }}
        >
          <EditOutlined />
        </button>
        <button
          style={{ backgroundColor: "transparent", color: "red" }}
          onClick={() => deleteProduct(row.original.id)}
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
            message={"Are you sure you want to delete this product?"}
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
            message="Product deleted successfully!"
            duration={2000}
          />
          <IonButton
            onClick={() => (window.location.href = "/admin/product/create")}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <AddBoxOutlined />
              Create Product
            </div>
          </IonButton>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminProduct;

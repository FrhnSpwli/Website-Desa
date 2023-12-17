import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import { IonContent, IonPage } from "@ionic/react";
import Styles from "../styles/AdministrasiKelembagaan.module.css";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

type Kelembagaan = {
  name: string;
  description: string
  startFrom: Timestamp;
};

const AdministrasiKelembagaan = () => {
  const kelembagaanRef = collection(db, "kelembagaan");

  const [kelembagaanList, setKelembagaanList] = useState<Kelembagaan[]>([]);

  useEffect(() => {
    const getKelembagaanList = async () => {
      try {
        const data = await getDocs(kelembagaanRef);
        const items = data.docs.map((doc) => {
          const { name, description, startFrom } = doc.data();
          return {
            name,
            description,
            startFrom: startFrom,
          };
        });
        setKelembagaanList(items);
      } catch (err) {
        console.log(err);
      }
    };
    getKelembagaanList();
  }, []);

  const formatTimestamp = (timestamp: { toDate: () => any; }) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  };

  const columns: MRT_ColumnDef<Kelembagaan>[] = useMemo(
    () => [
      {
        header: "Nama Kelembagaan",
        accessorKey: "name",
        size: 150,
      },
      {
        header: "Tanggal Pendirian",
        accessorKey: "startFrom",
        size: 150,
        render: (value: { toDate: () => any; }) => formatTimestamp(value),
      },
      {
        header: "Deskripsi",
        accessorKey: "description",
        size: 500,
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: kelembagaanList,
    enablePagination: true,
    enableSorting: true,
    enableStickyFooter: true,
  });

  return (
    <IonPage>
      <Navbar>Administrasi Kelembagaan</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default AdministrasiKelembagaan;

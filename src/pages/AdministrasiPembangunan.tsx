import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import { IonContent, IonPage } from "@ionic/react";
import Styles from "../styles/AdministrasiPembangunan.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { formatRupiah } from "../../utils/formatter";

type Pembangunan = {
  name: string;
  luas: number;
  biaya: string;
  lokasi: string;
  keterangan: string;
};

const AdministrasiPembangunan = () => {
  const pembangunanRef = collection(db, "pembangunan");

  const [pembangunanList, setPembangunanList] = useState<Pembangunan[]>([]);

  useEffect(() => {
    const getPembangunanList = async () => {
      try {
        const data = await getDocs(pembangunanRef);
        const items = data.docs.map((doc) => {
          const { name, luas, biaya, lokasi, keterangan } = doc.data();
          return {
            name,
            luas,
            biaya: formatRupiah(biaya),
            lokasi,
            keterangan,
          };
        });
        setPembangunanList(items);
      } catch (err) {
        console.log(err);
      }
    };
    getPembangunanList();
  }, []);

  const columns: MRT_ColumnDef<Pembangunan>[] = useMemo(
    () => [
      {
        header: "Pembangunan",
        accessorKey: "name",
        size: 150,
      },
      {
        header: "Luas (m2)",
        accessorKey: "luas",
        size: 100,
      },
      {
        header: "Biaya",
        accessorKey: "biaya",
        size: 150,
      },
      {
        header: "Lokasi",
        accessorKey: "lokasi",
        size: 250,
      },
      {
        header: "Keterangan",
        accessorKey: "keterangan",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: pembangunanList,
    enablePagination: true,
    enableSorting: true,
    enableStickyFooter: true,
  });

  return (
    <IonPage>
      <Navbar>Administrasi Pembangunan</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default AdministrasiPembangunan;

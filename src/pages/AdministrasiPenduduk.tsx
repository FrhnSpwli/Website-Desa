import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import { IonContent, IonPage } from "@ionic/react";
import Styles from "../styles/AdministrasiPenduduk.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

type Penduduk = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  email: string;
  gender: string;
  religion: string;
};

const AdministrasiPenduduk = () => {
  const pendudukRef = collection(db, "penduduk");

  const [pendudukList, setPendudukList] = useState<Penduduk[]>([]);

  useEffect(() => {
    const getPembangunanList = async () => {
      try {
        const data = await getDocs(pendudukRef);
        const items = data.docs.map((doc) => {
          const { firstName, lastName } = doc.data().name;
          const { address, email, gender, religion } = doc.data();
          return {
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
        console.log(err);
      }
    };
    getPembangunanList();
  }, []);

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
    enablePagination: true,
    enableSorting: true,
    enableStickyFooter: true,
  });

  return (
    <IonPage>
      <Navbar>Administrasi Penduduk</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default AdministrasiPenduduk;

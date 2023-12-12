import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import { IonContent, IonPage } from "@ionic/react";
import Styles from "../styles/AdministrasiKelembagaan.module.css";

type Person = {
  nomor: string;
  name: {
    firstName: string;
  };
  JenisKelamin: string;
  Jabatan: string;
  TanggalPenangkatan: string;
  TanggalPemberhentian: string;
};

const data: Person[] = [
  {
    nomor: "1",
    name: {
      firstName: "Alucard",
    },
    Jabatan: "Demon Hunter",
    TanggalPenangkatan: "12-02-2018",
    TanggalPemberhentian: "12-03-2020",
    JenisKelamin: "Laki-Laki",
  },
  {
    nomor: "2",
    name: {
      firstName: "Sukuna",
    },
    Jabatan: "King of curses",
    TanggalPenangkatan: "14-04-2020",
    TanggalPemberhentian: "12-07-2022",
    JenisKelamin: "Laki-Laki",
  },
  {
    nomor: "3",
    name: {
      firstName: "Xavier",
    },
    Jabatan: "Arbiter Of Light",
    TanggalPenangkatan: "20-03-2020",
    TanggalPemberhentian: "22-04-2023",
    JenisKelamin: "Laki-Laki",
  },
  {
    nomor: "4",
    name: {
      firstName: "Ganyu",
    },
    Jabatan: "Queen adeptus",
    TanggalPenangkatan: "20-09-2020",
    TanggalPemberhentian: "21-03-2039",
    JenisKelamin: "Perempuan",
  },
  {
    nomor: "5",
    name: {
      firstName: "Mitsuha",
    },
    Jabatan: "Wife Of Zanist",
    TanggalPenangkatan: "17-06-2016",
    TanggalPemberhentian: "12-06-2025",
    JenisKelamin: "Perempuan",
  },
];

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "nomor",
        header: "No",
        size: 150,
      },
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "JenisKelamin",
        header: "Jenis Kelamin",
        size: 150,
      },
      {
        accessorKey: "Jabatan",
        header: "Jabatan",
        size: 200,
      },
      {
        accessorKey: "TanggalPenangkatan",
        header: "Tanggal Pengangkatan",
        size: 150,
      },
      {
        accessorKey: "TanggalPemberhentian",
        header: "Tanggal Pemberhentian",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <IonPage>
      <Navbar>Administrasi Kelambagaan</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Example;

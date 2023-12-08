import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import { IonContent, IonPage } from "@ionic/react";
import Styles from "../styles/AdministrasiPenduduk.module.css";
import { IntegerType } from "mongodb";

//example data type
type Person = {
  nomor: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  email: string;
  gender: string;
  religion: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    nomor: "1",
    name: {
      firstName: "Ayaka",
      lastName: "Kamisato",
    },
    address: "Inazuma",
    email: "ayaka@gmail.com",
    gender: "Woman",
    religion: "Christian",
  },
  {
    nomor: "2",
    name: {
      firstName: "Kazuha",
      lastName: "Kaedehara",
    },
    address: "Inazuma",
    email: "kazuha@gmail.com",
    gender: "Man",
    religion: "Christian",
  },
  {
    nomor: "3",
    name: {
      firstName: "Sara",
      lastName: "Kujou",
    },
    address: "Inazuma",
    email: "sara@gmail.com",
    gender: "Woman",
    religion: "Christian",
  },
  {
    nomor: "4",
    name: {
      firstName: "Shogun",
      lastName: "Raiden",
    },
    address: "Inazuma",
    email: "Raiden@gmail.com",
    gender: "Woman",
    religion: "Christian",
  },
  {
    nomor: "5",
    name: {
      firstName: "Kokomi",
      lastName: "Sangonomia",
    },
    address: "Inazuma",
    email: "kokomi@gmail.com",
    gender: "Woman",
    religion: "Christian",
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "nomor",
        header: "No",
        size: 150,
      },
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 150,
      },
      {
        accessorKey: "religion",
        header: "Religion",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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

export default Example;

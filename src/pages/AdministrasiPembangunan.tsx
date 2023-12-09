import Styles from '../styles/AdministrasiPembangunan.module.css';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { IonContent, IonPage } from '@ionic/react';

type Person = { 
  no: string;
  nama_proyek: string;
  volume: string;
  biaya: string;
  lokasi: string;
  ket: string;
};

const data: Person[] = [
  {
    no: '1',
    nama_proyek: 'PROGRAM PEMBANGUNAN, PENGEMBANGAN DAN PEMELIHARAAN SARANA /PRASARANA LINGKUNGAN',
    volume: '800 m2',
    biaya: '900 jt',
    lokasi: 'Desa Panaikang, Kabupaten Gowa',
    ket: 'Progress'
  },
  {
    no: '2',
    nama_proyek: 'PROGRAM PEMBANGUNAN DAN PENGEMBANGAN SARANA DAN PRASARANA FISIK PERKANTORAN, KESEHATAN, PENDIDIKAN DAN SOSIAL',
    volume: '700 m2',
    biaya: '600jt',
    lokasi: 'Desa Panaikang, Kabupaten Gowa',
    ket: 'Progress'
  },
  {
    no: '3',
    nama_proyek: 'KEG. PEMB. SARANA / PRASARANA PERKANTORAN DAN KESEHATAN',
    volume: '900 m2',
    biaya: '670jt',
    lokasi: 'Desa Panaikang, Kabupaten Gowa',
    ket: 'Progress'
  },
  {
    no: '4',
    nama_proyek: 'KEGIATAN PEMBANGUNAN SARANA PRASARANA KESENIAN DAN KEBUDAYAAN',
    volume: '500 m2',
    biaya: '160jt',
    lokasi: 'Desa Panaikang, Kabupaten Gowa',
    ket: 'Progress'
  },
  {
    no: '5',
    nama_proyek: 'PENGADAAN, PEMBANGUNAN, PENGEMBANGAN DAN PEMELIHARAAN SARANA EKONOMI',
    volume: '700 m2',
    biaya: '750jt',
    lokasi: 'Desa Panaikang, Kabupaten Gowa',
    ket: 'Progress'
  },
];

const pembangunan = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'no',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'nama_proyek',
        header: 'Nama Proyek',
        size: 500,
      },
      {
        accessorKey: 'volume',
        header: 'Volume',
        size: 100,
      },
      {
        accessorKey: 'biaya',
        header: 'Biaya',
        size: 100,
      },
      {
        accessorKey: 'lokasi',
        header: 'Lokasi',
        size: 155,
      },
      {
        accessorKey: 'ket',
        header: 'Keterangan',
        size: 100,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <IonPage>
      <Navbar>Administrasi Pembangunan</Navbar>
      <IonContent> 
        <div className={Styles.table}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>

  );

};

export default pembangunan;

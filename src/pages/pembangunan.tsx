import Styles from '../styles/Pembangunan.module.css';
// import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { IonContent, IonPage } from '@ionic/react';
import Navbar from '../components/organisms/Navbar';

const data = [
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

const Example = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const columns = useMemo(
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
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        fontStyle: 'italic',
        fontWeight: 'normal',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
  });

  return (
    <IonPage>
      <IonContent>
        {/* <div className={Styles.nav}>
          <p>Administrasi Pembangunan <br></br>
            Buku Inventaris Hasil-Hasil Pembangunan</p>
          <button className={Styles.printbutton}>Print</button>
        </div> */}
        <Navbar>Administrasi Pembangunan Buku <br></br>Inventaris Hasil-Hasil Pembangungan</Navbar>
        <div className={Styles.table}>
          <MaterialReactTable table={table} />
        </div>
      </IonContent>
      <Footer />
    </IonPage>

  );

};

export default Example;

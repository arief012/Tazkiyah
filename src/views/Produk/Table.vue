<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Produk</strong>
      </CCardHeader>
      <CCardBody>
        <CButton
          component="a"
          color="primary"
          href="/#/Produk/tambah"
          role="button"
          >TAMBAH</CButton
        >
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama Produk</CTableHeaderCell>
              <CTableHeaderCell scope="col">Harga</CTableHeaderCell>
              <CTableHeaderCell scope="col"
                >Jadwal Keberangkatan</CTableHeaderCell
              >
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Umrah Reguler</CTableDataCell>
              <CTableDataCell>Rp. 25.000.000</CTableDataCell>
              <CTableDataCell>Kamis 3, 10, 17 & 31 Des 2022</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Umrah Ramadhan</CTableDataCell>
              <CTableDataCell>Rp. 30.100.000</CTableDataCell>
              <CTableDataCell>Kamis 22 April 2022</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Umrah Plus Turki</CTableDataCell>
              <CTableDataCell>Rp. 40.100.000</CTableDataCell>
              <CTableDataCell>Kamis 22 April 2022</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  </CCol>
</template>

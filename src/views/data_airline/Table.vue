<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Airlines</strong>
      </CCardHeader>
      <CCardBody>
        <CButton
          component="a"
          color="primary"
          href="/#/data_airline/tambah"
          role="button"
          >TAMBAH</CButton
        >
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama Airline</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tujuan</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Silk Air</CTableDataCell>
              <CTableDataCell>Singapura</CTableDataCell>
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
              <CTableDataCell>Scoot Air</CTableDataCell>
              <CTableDataCell>Jeddah</CTableDataCell>
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

<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>List Rencana Uang Muka Pelunasan Tazkiyah Tour</strong>
      </CCardHeader>
      <CCardBody>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
              <CTableHeaderCell scope="col">Target</CTableHeaderCell>
              <CTableHeaderCell scope="col">Bulanan</CTableHeaderCell>
              <CTableHeaderCell scope="col">Saldo</CTableHeaderCell>
              <CTableHeaderCell scope="col">Sisa Iuran</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Arif Riadi</CTableDataCell>
              <CTableDataCell>29.000.000</CTableDataCell>
              <CTableDataCell>1.000.000</CTableDataCell>
              <CTableDataCell>2.000.000</CTableDataCell>
              <CTableDataCell>27.000.000</CTableDataCell>
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
              <CTableDataCell>Faradiba Try Resky</CTableDataCell>
              <CTableDataCell>29.000.000</CTableDataCell>
              <CTableDataCell>1.000.000</CTableDataCell>
              <CTableDataCell>5.000.000</CTableDataCell>
              <CTableDataCell>24.000.000</CTableDataCell>
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

<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Keberangkatan</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Nama Produk</CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              placeholder="Nama Produk"
            />
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Tanggal</CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              placeholder="Nama Produk"
            />
          </div>
          <CButton color="info">S a v e</CButton> &nbsp
          <CButton component="a" color="primary" href="#" role="button"
            >B a c k</CButton
          >
        </CForm>
      </CCardBody>
    </CCard>
  </CCol>
</template>

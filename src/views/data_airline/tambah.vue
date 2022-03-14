<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Airline</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CButton color="dark">Cancel</CButton>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Nama Airline</CFormLabel>
            <CFormInput
              type="Text"
              id="exampleFormControlInput1"
              placeholder="Nama Airline"
            />
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1">Tujuan</CFormLabel>
            <CFormInput
              type="Text"
              id="exampleFormControlInput1"
              placeholder="Tujuan"
            />
          </div>
          <CButton color="info">Save</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  </CCol>
</template>

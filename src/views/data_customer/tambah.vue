<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Customer</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Email address</CFormLabel
            >
            <CFormInput
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlTextarea1"
              >Example textarea</CFormLabel
            >
            <CFormTextarea
              id="exampleFormControlTextarea1"
              rows="3"
            ></CFormTextarea>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Produk</strong>
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
            <CFormLabel for="exampleFormControlInput1">Harga</CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              placeholder="Nama Produk"
            />
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pergi ke - 1</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pergi ke - 2</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pergi ke - 3</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pulang ke - 1</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pulang ke - 2</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Pesawat Pulang ke - 3</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Airline</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Hotal Di Makassar</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Hotel</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Hotal Di Singapore</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Hotel</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Hotal Di Makkah</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Hotel</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlInput1"
              >Hotal Di Madina</CFormLabel
            >
            <CFormSelect aria-label="Default select example">
              <option>Plih Hotel</option>
              <option value="1">Scoot</option>
              <option value="2">Garuda</option>
              <option value="3">Silk Air</option>
            </CFormSelect>
          </div>

          <div class="mb-3">
            <CFormLabel for="exampleFormControlTextarea1">Fasilitas</CFormLabel>
            <CFormTextarea
              id="exampleFormControlTextarea1"
              rows="3"
            ></CFormTextarea>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlTextarea1">Itinerary</CFormLabel>
            <CFormTextarea
              id="exampleFormControlTextarea1"
              rows="3"
            ></CFormTextarea>
          </div>
          <div class="mb-3">
            <CFormLabel for="exampleFormControlTextarea1"
              >Syarat & Ketentuan</CFormLabel
            >
            <CFormTextarea
              id="exampleFormControlTextarea1"
              rows="3"
            ></CFormTextarea>
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

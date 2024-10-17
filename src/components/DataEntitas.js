import React, { useState, useEffect } from 'react';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    jenisPemberitahuan: 'PENGUSAHA',
    NIB: '',
    tanpaNIB: false,
    noIdentitas: '',
    jenisIdentitas: '',
    namaPerusahaan: '',
    provinsi: '',
    kotaKabupaten: '',
    kecamatan: '',
    kodePos: '',
    telephone: '',
    email: '',
    status: '',
    rtRw: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const apiURL = `http://10.8.3.199:1880/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2`;

      try {
        const response = await fetch(apiURL);
        const result = await response.json();
        if (result.status) {
          const apiData = result.data;

          setFormData({
            jenisPemberitahuan: 'PENGUSAHA',
            NIB: apiData.NIB || '',
            tanpaNIB: apiData.tanpaNIB || false,
            noIdentitas: apiData.noIdentitas || '',
            jenisIdentitas: apiData.jenisIdentitas || '',
            namaPerusahaan: apiData.namaPerusahaan || '',
            provinsi: apiData.provinsi || '',
            kotaKabupaten: apiData.kotaKabupaten || '',
            kecamatan: apiData.kecamatan || '',
            kodePos: apiData.kodePos || '',
            telephone: apiData.telephone || '',
            email: apiData.email || '',
            status: apiData.status || '',
            rtRw: apiData.rtRw || ''
          });

          setIsLoading(false);
        } else {
          setErrorMessage('Failed to fetch data from API.');
          setIsLoading(false);
        }
      } catch (error) {
        setErrorMessage('Error fetching data from API.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Pemberitahuan</label>
          <select
            name="jenisPemberitahuan"
            value={formData.jenisPemberitahuan}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            disabled
          >
            <option value="PENGUSAHA">PENGUSAHA</option>
          </select>
        </div>
      </div>

      <div className="font-bold text-gray-700 mb-4">Pengusaha</div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Identitas</label>
          <select
            name="jenisIdentitas"
            value={formData.jenisIdentitas}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Pilih Jenis Identitas</option>
            <option value="KTP">KTP</option>
            <option value="Paspor">Paspor</option>
            <option value="SIM">SIM</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">NIB</label>
          <input
            type="text"
            name="NIB"
            value={formData.NIB}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="tanpaNIB"
              checked={formData.tanpaNIB}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Tanpa NIB</label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">No Identitas (16 Digit)</label>
          <input
            type="text"
            name="noIdentitas"
            value={formData.noIdentitas}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="No Identitas (16 Digit)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Perusahaan</label>
          <input
            type="text"
            name="namaPerusahaan"
            value={formData.namaPerusahaan}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Provinsi</label>
          <input
            type="text"
            name="provinsi"
            value={formData.provinsi}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kota / Kabupaten</label>
          <input
            type="text"
            name="kotaKabupaten"
            value={formData.kotaKabupaten}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
          <input
            type="text"
            name="kecamatan"
            value={formData.kecamatan}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kode Pos</label>
          <input
            type="text"
            name="kodePos"
            value={formData.kodePos}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Telephone</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">RT / RW</label>
          <input
            type="text"
            name="rtRw"
            value={formData.rtRw}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm">Simpan</button>
      </div>
    </form>
  );
};

export default BusinessForm;

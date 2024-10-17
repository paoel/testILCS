import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nomorPengajuan: '',
    tanggalPengajuan: '',
    nomorPendaftaran: '',
    tanggalPendaftaran: '',
    kantorPabean: '',
    skepFasilitas: '',
    jenisPIB: '',
    jenisImpor: '',
    caraPembayaran: '',
    transaksi: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };

  const fetchData = async () => {
    const apiURL = `https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001`;

    try {
      const response = await fetch(apiURL);
      const result = await response.json();
      if (result.status) {
        const apiData = result.data;

        setFormData({
          nomorPengajuan: apiData.nomor_pengajuan,
          tanggalPengajuan: apiData.tanggal_pengajuan ? formatDate(apiData.tanggal_pengajuan) : '',
          nomorPendaftaran: apiData.nomor_pendaftaran || '',
          tanggalPendaftaran: apiData.tanggal_pendaftaran ? formatDate(apiData.tanggal_pendaftaran) : '',
          kantorPabean: apiData.ur_pabean_asal,
          skepFasilitas: apiData.kd_skep_fasilitas,
          jenisPIB: apiData.ur_jenis_pib,
          jenisImpor: apiData.ur_jenis_impor,
          caraPembayaran: apiData.ur_cara_bayar,
          transaksi: apiData.ur_transaksi_impor,
        });

        setIsLoading(false);
        setErrorMessage(null);
      } else {
        setErrorMessage('Failed to fetch data from API.');
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage('Error fetching data from API.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
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
          <label className="block text-sm font-medium text-gray-700">Nomor Pengajuan</label>
          <input
            type="text"
            name="nomorPengajuan"
            value={formData.nomorPengajuan}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal Pengajuan</label>
          <input
            type="date"
            name="tanggalPengajuan"
            value={formData.tanggalPengajuan}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nomor Pendaftaran</label>
          <input
            type="text"
            name="nomorPendaftaran"
            value={formData.nomorPendaftaran}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Nomor Pendaftaran"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal Pendaftaran</label>
          <input
            type="date"
            name="tanggalPendaftaran"
            value={formData.tanggalPendaftaran}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kantor Pabean</label>
          <input
            type="text"
            name="kantorPabean"
            value={formData.kantorPabean}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">SKEP Fasilitas</label>
          <input
            type="text"
            name="skepFasilitas"
            value={formData.skepFasilitas}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="SKEP Fasilitas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis PIB</label>
          <input
            type="text"
            name="jenisPIB"
            value={formData.jenisPIB}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Impor</label>
          <input
            type="text"
            name="jenisImpor"
            value={formData.jenisImpor}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cara Pembayaran</label>
          <input
            type="text"
            name="caraPembayaran"
            value={formData.caraPembayaran}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transaksi</label>
          <input
            type="text"
            name="transaksi"
            value={formData.transaksi}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>
      </div>

      <div className="col-span-2 flex justify-between">
        <button type="button" className="px-4 py-2 bg-gray-200 rounded-md shadow-sm">Sebelumnya</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm">Selanjutnya</button>
      </div>
    </form>
  );
};

export default ContactForm;

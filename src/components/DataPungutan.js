import React, { useState, useEffect } from 'react';

const DataPungutanForm = () => {
  const [formData, setFormData] = useState({
    nilai: 119600,
    biayaTambahan: 0,
    biayaPengurangan: 2850,
    voluntaryDeclaration: 0,
    asuransi: 637.14,
    freight: 4978,
    kurs: 16232,
    cif: 122365.14,
    cifRp: 1986230952.48,
    flagKontainer: 'Cargo Curah',
    bruto: 1000.98,
    netto: 1000.98,
    namaPerusahaan: '',
    alamat: '',
    npwp: '',
    status: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = `https://api-hub.ilcs.co.id/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2`;

      try {
        const response = await fetch(apiURL);
        const result = await response.json();

        if (result.status) {
          const apiData = result.data.pengusaha;

          // Set the form data with the fetched API data
          setFormData({
            ...formData,
            namaPerusahaan: apiData.nama_identitas || '',
            alamat: apiData.alamat_identitas || '',
            npwp: apiData.nomor_identitas || '',
            status: apiData.status || '',
          });

          setIsLoading(false);
        } else {
          setErrorMessage('Gagal mengambil data dari API.');
          setIsLoading(false);
        }
      } catch (error) {
        setErrorMessage('Error saat mengambil data dari API.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Incoterms <span className="text-red-500">*</span>
          </label>
          <select className="border rounded px-3 py-2">
            <option value="Free on Board">Free on Board</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Valuta <span className="text-red-500">*</span>
          </label>
          <select className="border rounded px-3 py-2">
            <option value="US Dollar">US Dollar</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Nilai <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="nilai"
            value={formData.nilai}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Biaya Tambahan</label>
          <input
            type="number"
            name="biayaTambahan"
            value={formData.biayaTambahan}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Biaya Pengurangan</label>
          <input
            type="number"
            name="biayaPengurangan"
            value={formData.biayaPengurangan}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Voluntary Declaration</label>
          <input
            type="number"
            name="voluntaryDeclaration"
            value={formData.voluntaryDeclaration}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Asuransi</label>
          <input
            type="number"
            name="asuransi"
            value={formData.asuransi}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Freight</label>
          <input
            type="number"
            name="freight"
            value={formData.freight}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Kurs</label>
          <input
            type="number"
            name="kurs"
            value={formData.kurs}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">CIF</label>
          <input
            type="number"
            name="cif"
            value={formData.cif}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">CIF Rp</label>
          <input
            type="number"
            name="cifRp"
            value={formData.cifRp}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Bruto</label>
          <input
            type="number"
            name="bruto"
            value={formData.bruto}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Netto</label>
          <input
            type="number"
            name="netto"
            value={formData.netto}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Flag Kontainer <span className="text-red-500">*</span>
          </label>
          <select
            className="border rounded px-3 py-2"
            name="flagKontainer"
            value={formData.flagKontainer}
            onChange={handleChange}
          >
            <option value="Cargo Curah">Cargo Curah</option>
          </select>
        </div>

        {/* Additional Fields from API */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Nama Perusahaan</label>
          <input
            type="text"
            name="namaPerusahaan"
            value={formData.namaPerusahaan}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">NPWP</label>
          <input
            type="text"
            name="npwp"
            value={formData.npwp}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            className="border rounded px-3 py-2"
            readOnly
          />
        </div>

        <div className="flex col-span-2 justify-center mt-4">
          <div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Kelengkapan Data
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              Simpan
            </button>
          </div>
        </div>

        <div className="flex col-span-2 justify-center mt-4">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded mr-2">
            Sebelumnya
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataPungutanForm;

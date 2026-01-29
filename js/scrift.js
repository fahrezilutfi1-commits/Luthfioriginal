function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Menutup sidebar setelah memilih menu
function closeMenu() {
    document.getElementById('sidebar').classList.remove('active');
}

// ===========================
// FUNGSI NAVIGASI & MENU
// ===========================

// Fungsi untuk menampilkan halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
        page.style.display = 'none';
    });
    
    // Tampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
        selectedPage.style.display = 'block';
    }
    
    // Tutup menu di mobile setelah memilih
    closeMenu();
}

// Toggle menu sidebar (untuk mobile)
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Tutup menu sidebar
function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
}

// ===========================
// FUNGSI FORM HANDLING
// ===========================

// Data storage sementara (dalam aplikasi nyata gunakan database)
let dataBarang = [
    { kode: 'BRG-001', nama: 'Beras Premium 5kg', kategori: 'Sembako', satuan: 'Pcs', stok: 150, harga: 75000 },
    { kode: 'BRG-002', nama: 'Gula Pasir 1kg', kategori: 'Sembako', satuan: 'Kg', stok: 200, harga: 15000 },
    { kode: 'BRG-003', nama: 'Minyak Goreng 2L', kategori: 'Sembako', satuan: 'Liter', stok: 120, harga: 32000 }
];

// Form Submit Handler - Master Barang
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // FORM BARANG
    // ===========================
    const formBarang = document.getElementById('formBarang');
    if (formBarang) {
        formBarang.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const data = {
                kode: document.getElementById('kodeBarang').value,
                nama: document.getElementById('namaBarang').value,
                kategori: document.getElementById('kategoriBarang').value,
                satuan: document.getElementById('satuanBarang').value,
                stok: document.getElementById('stokBarang').value,
                harga: document.getElementById('hargaBarang').value,
                deskripsi: document.getElementById('deskripsiBarang').value
            };
            
            // Validasi
            if (!data.kode || !data.nama || !data.kategori || !data.satuan) {
                alert('❌ Mohon lengkapi semua field yang wajib diisi!');
                return;
            }
            
            // Simpan data (simulasi)
            dataBarang.push(data);
            
            alert('✅ Data barang berhasil disimpan!');
            formBarang.reset();
            showPage('barang');
        });
    }

    // ===========================
    // FORM GUDANG
    // ===========================
    const formGudang = document.getElementById('formGudang');
    if (formGudang) {
        formGudang.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const data = {
                kode: document.getElementById('kodeGudang').value,
                nama: document.getElementById('namaGudang').value,
                lokasi: document.getElementById('lokasiGudang').value,
                kapasitas: document.getElementById('kapasitasGudang').value,
                status: document.getElementById('statusGudang').value
            };
            
            if (!data.kode || !data.nama || !data.lokasi) {
                alert('❌ Mohon lengkapi semua field yang wajib diisi!');
                return;
            }
            
            alert('✅ Data gudang berhasil disimpan!');
            formGudang.reset();
            showPage('gudang');
        });
    }

    // ===========================
    // FORM HARGA
    // ===========================
    const formHarga = document.getElementById('formHarga');
    if (formHarga) {
        formHarga.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const hargaBeli = parseFloat(document.getElementById('hargaBeli').value);
            const hargaJual = parseFloat(document.getElementById('hargaJual').value);
            
            if (hargaJual < hargaBeli) {
                alert('⚠️ Harga jual tidak boleh lebih kecil dari harga beli!');
                return;
            }
            
            const margin = ((hargaJual - hargaBeli) / hargaBeli * 100).toFixed(2);
            
            alert(`✅ Data harga berhasil disimpan!\nMargin: ${margin}%`);
            formHarga.reset();
            showPage('harga');
        });
    }

    // ===========================
    // FORM KARYAWAN
    // ===========================
    const formKaryawan = document.getElementById('formKaryawan');
    if (formKaryawan) {
        formKaryawan.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const telp = document.getElementById('telpKaryawan').value;
            
            // Validasi nomor telepon
            if (!/^[0-9-+]+$/.test(telp)) {
                alert('⚠️ Format nomor telepon tidak valid!');
                return;
            }
            
            alert('✅ Data karyawan berhasil disimpan!');
            formKaryawan.reset();
            showPage('karyawan');
        });
    }

    // ===========================
    // FORM KATEGORI
    // ===========================
    const formKategori = document.getElementById('formKategori');
    if (formKategori) {
        formKategori.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Data kategori berhasil disimpan!');
            formKategori.reset();
            showPage('kategori');
        });
    }

    // ===========================
    // FORM PELANGGAN
    // ===========================
    const formPelanggan = document.getElementById('formPelanggan');
    if (formPelanggan) {
        formPelanggan.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Data pelanggan berhasil disimpan!');
            formPelanggan.reset();
            showPage('pelanggan');
        });
    }

    // ===========================
    // FORM SATUAN
    // ===========================
    const formSatuan = document.getElementById('formSatuan');
    if (formSatuan) {
        formSatuan.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Data satuan berhasil disimpan!');
            formSatuan.reset();
            showPage('satuan');
        });
    }

    // ===========================
    // FORM SUPPLIER
    // ===========================
    const formSupplier = document.getElementById('formSupplier');
    if (formSupplier) {
        formSupplier.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('emailSupplier').value;
            
            // Validasi email
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('⚠️ Format email tidak valid!');
                return;
            }
            
            alert('✅ Data supplier berhasil disimpan!');
            formSupplier.reset();
            showPage('supplier');
        });
    }

    // ===========================
    // FORM PENJUALAN
    // ===========================
    const formPenjualan = document.getElementById('formPenjualan');
    if (formPenjualan) {
        formPenjualan.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Transaksi penjualan berhasil disimpan!');
            formPenjualan.reset();
            showPage('penjualan');
        });
    }

    // ===========================
    // FORM RETUR PEMBELIAN
    // ===========================
    const formReturPembelian = document.getElementById('formReturPembelian');
    if (formReturPembelian) {
        formReturPembelian.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Data retur pembelian berhasil disimpan!');
            formReturPembelian.reset();
            showPage('retur-pembelian');
        });
    }

    // ===========================
    // FORM RETUR PENJUALAN
    // ===========================
    const formReturPenjualan = document.getElementById('formReturPenjualan');
    if (formReturPenjualan) {
        formReturPenjualan.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Data retur penjualan berhasil disimpan!');
            formReturPenjualan.reset();
            showPage('retur-penjualan');
        });
    }

    // ===========================
    // FORM STOK OPNAME
    // ===========================
    const formStokOpname = document.getElementById('formStokOpname');
    if (formStokOpname) {
        formStokOpname.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Stok opname berhasil dimulai!');
            formStokOpname.reset();
            showPage('stok-opname');
        });
    }

    // ===========================
    // FORM CONTACT
    // ===========================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;
            
            if (!nama || !email || !pesan) {
                alert('❌ Mohon lengkapi semua field!');
                return;
            }
            
            alert(`✅ Terima kasih ${nama}!\nPesan Anda telah terkirim. Saya akan segera menghubungi Anda.`);
            contactForm.reset();
        });
    }

    // ===========================
    // TAMBAH BARIS STOK OPNAME
    // ===========================
    const addRowBtn = document.getElementById('addRow');
    if (addRowBtn) {
        addRowBtn.addEventListener('click', function() {
            const tbody = document.getElementById('barangOpname');
            const newRow = `
                <tr>
                    <td>
                        <select name="barang[]" class="form-control" required>
                            <option value="">Pilih Barang</option>
                            <option>Barang 1</option>
                            <option>Barang 2</option>
                            <option>Barang 3</option>
                        </select>
                    </td>
                    <td><input type="number" name="stok_sistem[]" class="form-control" value="0" readonly></td>
                    <td><input type="number" name="stok_fisik[]" class="form-control" value="0" required></td>
                    <td><input type="number" name="selisih[]" class="form-control" readonly></td>
                    <td><button type="button" class="btn-action btn-delete" onclick="removeRow(this)">🗑️</button></td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', newRow);
        });
    }
});

// ===========================
// FUNGSI TAMBAHAN
// ===========================

// Hapus baris tabel
function removeRow(btn) {
    if (confirm('Hapus baris ini?')) {
        btn.closest('tr').remove();
    }
}

// Format rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Auto-generate kode
function generateKode(prefix) {
    const timestamp = Date.now().toString().slice(-6);
    return `${prefix}-${timestamp}`;
}

// Fungsi pencarian
function searchTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                found = true;
                break;
            }
        }
        
        rows[i].style.display = found ? '' : 'none';
    }
}

// Konfirmasi hapus
function confirmDelete(item) {
    return confirm(`Apakah Anda yakin ingin menghapus ${item}?`);
}

// Event listener untuk tombol edit dan delete
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-edit')) {
        alert('Fitur edit akan segera hadir!');
    }
    
    if (e.target.classList.contains('btn-delete')) {
        if (confirmDelete('data ini')) {
            alert('✅ Data berhasil dihapus!');
            e.target.closest('tr').remove();
        }
    }
});

// ===========================
// ANIMASI & INTERAKSI
// ===========================

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Set tanggal hari ini di form
document.querySelectorAll('input[type="date"]').forEach(input => {
    if (!input.value) {
        input.valueAsDate = new Date();
    }
});

console.log('✅ JavaScript Portfolio & Inventory System loaded successfully!');

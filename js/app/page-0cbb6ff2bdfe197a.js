(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    922: function(e, t, a) {
        Promise.resolve().then(a.bind(a, 8212))
    },
    8212: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return i
            }
        });
        var l = a(7437)
          , x = a(7138)
          , s = a(6463)
          , n = a(2265);
        function i() {
            let e = (0,
            s.useRouter)();
            (0,
            n.useRef)(null);
            let[t,a] = (0,
            n.useState)("")
              , [i,r] = (0,
            n.useState)("")
              , [m,d] = (0,
            n.useState)(!1)
              , [u,o] = (0,
            n.useState)(!1)
              , [c,p] = (0,
            n.useState)(!0)
              , h = ["Kucing", "Tikus", "Kadal", "Anomali", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing", "Arwah", "Harimau", "Kambing", "Berang-berang", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Anomali", "Kura-kura", "Lele", "Laba-laba", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", "Gorila", "Semut", "Rubah", "Naga", "Naga", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang", "Musang", "Monyet", "Kecoak", "Ulat Bulu", "Rubah", "Kupu-kupu", "Laba-laba", "Biawak", "Kurama", "Anomali", "Tikus", "Raja", "Raja", "Lipan", "Jangkrik", "Lipan", "Ulat Bulu", "Kucing", "Panda", "Anomali", "Sepuh"]
              , g = ["Jawa", "Depresi", "Mekanik", "Insom", "Skizo", "Klepto", "Bunting", "Sigma", "Cupu", "Raksasa", "Stress", "Berkaki Seribu", "Skizo", "Sad boy", "Kayang", "Metal", "Mewing", "Gyatt", "Idol", "Yapper", "Skizo", "Second Choice :)", "Ambis", "Sigma", "Dribble", "Jawa", "Kayang", "Ngesot", "Sunda", "Panuan", "Kalimantan", "Kutub", "Sumatera", "Idol", "Sunda", "Sumatera", "Yapper", "Ngesot", "Ambis", "Kayang", "Pemarah", "Kocak", "Second Choice :)", "Push Up", "Gila", "Cupu", "Silver", "Emas", "Perak", "Cilacap", "Kocak", "Stress"]
              , k = ["Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Ice Cream", "Taplak Meja", "Pecel Lele", "Charger Iphone", "Airpods", "Kalkulator", "Sendal Jepit", "Undur-undur Maju", "Bagas Dribble", "Remote AC", "Sendal Jepit", "Sapu Lidi", "Gagang Pintu", "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", "Bakwan Jagung", "Rice Cooker", "Nugget Rebus", "Asep Kulkas", "Bintang Skibidi", "Helikopter", "Laba-laba Sunda", "Raja Beruang", "Nastar", "Ice Cream", "Seblak Ceker", "Macan Cisewu", "Zaki Indomie", "Singkong Rebus", "Farhan Kebab", "Rizal Perkedel", "Joko Kopling", "Botol Yakult", "Reza Wangsaf", "Sigit Rendang", "Biawak Alaska", "Budi Martabak", "Nurdin Basket", "Edgar Burger", "Aspal Tol Cipularang", "Tuyul Mohawk", "Aldi Taher", "Cocomelon", "Maaf yang ini khodamnya kabur", "Orang Normal \uD83D\uDE00", "Kereta Thomas", "Botol Yakult", "Ice Cream", "Raja Khodam \uD83D\uDC51", "Kura-kura Ninja", "Batagor"]
              , f = Math.round(Math.random() * (h.length - 1))
              , b = Math.round(Math.random() * (g.length - 1))
              , j = Math.round(Math.random() * (k.length - 1))
              , N = ""
              , w = h[f]
              , y = g[b]
              , S = k[j];
            ("" === N || null == N) && (N = "NPC Biasa"),
            ("" === w || null == w) && (N = h[0]),
            ("" === y || null == y) && (N = g[0]),
            ("" === S || null == S) && (N = k[0]),
            N = 0 === Math.round(Math.random()) ? w + " " + y : S;
            let v = e=>{
                e.preventDefault();
                let t = document.getElementById("inputnama");
                t && t instanceof HTMLInputElement && r(t.value),
                d(!0),
                p(!1),
                setTimeout(()=>{
                    d(!1),
                    o(!0),
                    p(!0),
                    a(N)
                }
                , 5e3)
            }
              , K = t=>{
                e.refresh()
            }
            ;
            return (0,
            l.jsx)("main", {
                className: "h-screen w-full m-0 overflow-hidden",
                children: (0,
                l.jsx)("div", {
                    className: "w-auto h-full custom-bg m-0 overflow-hidden",
                    children: (0,
                    l.jsxs)("div", {
                        className: "w-auto h-screen flex flex-col justify-center items-center relative z-10 m-0 overflow-hidden",
                        children: [(0,
                        l.jsx)("div", {
                            className: "w-full h-screen flex flex-col justify-center items-center",
                            children: (0,
                            l.jsx)("div", {
                                className: "flex-col text-white bg-[#9394ab3f] p-10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-xl sm:w-screen md:w-screen lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-1",
                                children: (0,
                                l.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center",
                                    children: [(0,
                                    l.jsx)("h2", {
                                        className: "text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl font-bold title",
                                        children: "Cek Khodam"
                                    }), !m && !u && (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center",
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "mt-5 flex flex-col justify-center items-center",
                                            children: [(0,
                                            l.jsx)("div", {
                                                className: "text-center font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl",
                                                children: "Cek khodam yang bersemayam di dalam diri anda"
                                            }), (0,
                                            l.jsx)("input", {
                                                id: "inputnama",
                                                className: "sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl custom-input-text mt-2",
                                                placeholder: "Tulis nama kamu di sini",
                                                required: !0
                                            })]
                                        }), (0,
                                        l.jsx)("button", {
                                            onClick: e=>v(e),
                                            className: "mt-5 bg-[#5F59D0] px-8 py-2 rounded-[200px] hover:bg-[#4e4aa7] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[24px]",
                                            id: "btn-check",
                                            type: "submit",
                                            children: "CHECK"
                                        })]
                                    }), m && (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center mt-5",
                                        children: [(0,
                                        l.jsx)("div", {
                                            className: "loading w-[80px] h-[80px] relative overflow-visible"
                                        }), (0,
                                        l.jsx)("div", {
                                            className: "text-white mt-5 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight text-center",
                                            children: "Kami sedang memeriksa khodam yang bersemayam di dalam diri kamu"
                                        })]
                                    }), !m && u && (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col justify-center items-center",
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "text-white text-center text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-2xl font-extralight mt-2",
                                            children: ["Khodam yang ada di dalam diri ", (0,
                                            l.jsx)("span", {
                                                className: "font-bold text-[#C3F8FF]",
                                                children: i
                                            }), ":"]
                                        }), (0,
                                        l.jsx)("div", {
                                            className: "result-text text-center text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-7 mb-7 text-[#C3F8FF]",
                                            children: t
                                        }), (0,
                                        l.jsx)("div", {
                                            className: "text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] text-gray-400 text-center",
                                            children: "Jangan lupa share ke yang lain agar mereka tahu sosok aseli yang ada di dalam diri kamu"
                                        }), (0,
                                        l.jsx)("a", {
                                            href: "/",
                                            onClick: e=>K(e),
                                            className: "mt-3 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-3xl bg-[#5F59D0] text-white px-4 py-1 rounded-full",
                                            children: "Ulangi"
                                        })]
                                    }), c && (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col mt-5 justify-center items-center",
                                        children: [(0,
                                        l.jsx)("div", {
                                            className: "text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[18px] text-white text-center",
                                        })]
                                    })]
                                })
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col justify-center items-center my-1",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "text-center text-white my-2 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[20px]",
                                children: ["Support Saya di ", (0,
                                l.jsx)(x.default, {
                                    className: "text-[#ff7676] font-bold",
                                    href: "https://trakteer.id/call_me_farato-san/tip?open=true",
                                    target: "_blank",
                                    children: "Trakteer Tempe"
                                }), " & ", (0,
                                l.jsx)(x.default, {
                                    className: "text-[#ff7676] font-bold",
                                    href: "https://trakteer.id/call_me_farato-san/tip?open=true",
                                    target: "_blank",
                                    children: "Trakteer Nasi Padang"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "text-white font-thin text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-[18px] text-center",
                                children: ["Developed by ", (0,
                                l.jsx)(x.default, {
                                    className: "text-[#97D3FF] font-bold",
                                    href: "https://instagram.com/farato_hen",
                                    target: "_blank",
                                    children: "Farato"
                                })]
                            })]
                        })]
                    })
                })
            })
        }
    }
}, function(e) {
    e.O(0, [291, 971, 23, 744], function() {
        return e(e.s = 922)
    }),
    _N_E = e.O()
}
]);

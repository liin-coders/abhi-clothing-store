/* =====================================================================
   settings.js  -  DUKAAN KA TIMING AUR OPEN / CLOSED STATUS
   =====================================================================
   Website par "Open now" (hara dot) ya "Closed now" (laal dot) isi file
   ki settings se banta hai. Sirf neeche likhi cheezein badalni hain,
   baaki kuch mat chhedna.

   Time hamesha India ka (IST) liya jaata hai, chahe customer kisi bhi
   desh ya phone ke time se website dekhe.

   Badlav ke baad file SAVE karo aur website ko refresh karo.
   ===================================================================== */

window.STORE = {

  /* ---------------------------------------------------------------
     1) STATUS KA MODE  (sirf andar ka lafz badlo, quotes " " rehne do)

        "auto"   -> neeche diye time ke hisaab se apne aap Open / Closed
                    (roz ke liye yahi rakho)
        "closed" -> dukaan band hai, website zabardasti "Closed" dikhayegi
        "open"   -> website zabardasti "Open" dikhayegi

     Achanak dukaan band karni ho to "closed" likho.
     Wapis kholne par dobara "auto" likh do.
     --------------------------------------------------------------- */
  mode: "auto",

  /* ---------------------------------------------------------------
     2) CHHOTA MESSAGE (zaroori nahi)
        Timing ki list ke neeche dikhta hai.
        Jaise: "Aaj Diwali ki chhutti hai, kal subah 8 baje khulenge"
        Kuch nahi dikhana to khali rehne do:  note: ""
     --------------------------------------------------------------- */
  note: "",

  /* ---------------------------------------------------------------
     3) HAR DIN KA TIME
        ["khulne ka time", "band hone ka time"]
        Time 24 ghante ke format me likho:  8 baje subah = "08:00",
        9 baje raat = "21:00",  1 baje dopahar = "13:00"

        Kisi din dukaan hamesha band rehti ho to us din ke aage
        ["08:00", "21:00"] ki jagah null likho.  Jaise:  Sunday: null
     --------------------------------------------------------------- */
  hours: {
    Monday:    ["08:00", "21:00"],
    Tuesday:   ["08:00", "21:00"],
    Wednesday: ["08:00", "21:00"],
    Thursday:  ["08:00", "21:00"],
    Friday:    ["08:00", "21:00"],
    Saturday:  ["08:00", "21:00"],
    Sunday:    [null , null]
  },

  /* ---------------------------------------------------------------
     4) CHHUTTI WALE DIN
        In tareekhon par poora din "Closed" dikhega.
        Tareekh ka format:  "saal-mahina-din"  jaise "2026-11-08"
        Har tareekh ke baad comma (,) lagana.  Misaal:

        holidays: [
          "2026-11-08",
          "2026-11-09",
        ],
     --------------------------------------------------------------- */
  holidays: [
  ],

  /* ---------------------------------------------------------------
     5) (ZAROORI NAHI - SIRF AGAR PHONE SE LIVE ON/OFF CHAHIYE)
        Google Sheet ki ek cell me owner "open" ya "closed" likhega aur
        website khud padh lega, file badalne ki zaroorat nahi.
        Iske liye us cell ka "Publish to web (CSV)" link yahan daalna hota
        hai. Ye setup ek baar karna padta hai (developer ki madad se).
        Nahi chahiye to khali rehne do:  statusUrl: ""
     --------------------------------------------------------------- */
  statusUrl: ""
};

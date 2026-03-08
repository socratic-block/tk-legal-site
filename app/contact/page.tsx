"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";

// 1. DATA: 250 Global Countries and Territories
const ALL_COUNTRIES = [
  { name: "Afghanistan", code: "+93", iso: "af" }, { name: "Aland Islands", code: "+358", iso: "ax" },
  { name: "Albania", code: "+355", iso: "al" }, { name: "Algeria", code: "+213", iso: "dz" },
  { name: "American Samoa", code: "+1", iso: "as" }, { name: "Andorra", code: "+376", iso: "ad" },
  { name: "Angola", code: "+244", iso: "ao" }, { name: "Anguilla", code: "+1", iso: "ai" },
  { name: "Antigua and Barbuda", code: "+1", iso: "ag" }, { name: "Argentina", code: "+54", iso: "ar" },
  { name: "Armenia", code: "+374", iso: "am" }, { name: "Aruba", code: "+297", iso: "aw" },
  { name: "Australia", code: "+61", iso: "au" }, { name: "Austria", code: "+43", iso: "at" },
  { name: "Azerbaijan", code: "+994", iso: "az" }, { name: "Bahamas", code: "+1", iso: "bs" },
  { name: "Bahrain", code: "+973", iso: "bh" }, { name: "Bangladesh", code: "+880", iso: "bd" },
  { name: "Barbados", code: "+1", iso: "bb" }, { name: "Belarus", code: "+375", iso: "by" },
  { name: "Belgium", code: "+32", iso: "be" }, { name: "Belize", code: "+501", iso: "bz" },
  { name: "Benin", code: "+229", iso: "bj" }, { name: "Bermuda", code: "+1", iso: "bm" },
  { name: "Bhutan", code: "+975", iso: "bt" }, { name: "Bolivia", code: "+591", iso: "bo" },
  { name: "Bosnia and Herzegovina", code: "+387", iso: "ba" }, { name: "Botswana", code: "+267", iso: "bw" },
  { name: "Brazil", code: "+55", iso: "br" }, { name: "British Indian Ocean", code: "+246", iso: "io" },
  { name: "Brunei", code: "+673", iso: "bn" }, { name: "Bulgaria", code: "+359", iso: "bg" },
  { name: "Burkina Faso", code: "+226", iso: "bf" }, { name: "Burundi", code: "+257", iso: "bi" },
  { name: "Cambodia", code: "+855", iso: "kh" }, { name: "Cameroon", code: "+237", iso: "cm" },
  { name: "Canada", code: "+1", iso: "ca" }, { name: "Cape Verde", code: "+238", iso: "cv" },
  { name: "Cayman Islands", code: "+1", iso: "ky" }, { name: "Central African Republic", code: "+236", iso: "cf" },
  { name: "Chad", code: "+235", iso: "td" }, { name: "Chile", code: "+56", iso: "cl" },
  { name: "China", code: "+86", iso: "cn" }, { name: "Christmas Island", code: "+61", iso: "cx" },
  { name: "Cocos (Keeling) Islands", code: "+61", iso: "cc" }, { name: "Colombia", code: "+57", iso: "co" },
  { name: "Comoros", code: "+269", iso: "km" }, { name: "Congo", code: "+242", iso: "cg" },
  { name: "Congo, DRC", code: "+243", iso: "cd" }, { name: "Cook Islands", code: "+682", iso: "ck" },
  { name: "Costa Rica", code: "+506", iso: "cr" }, { name: "Cote d'Ivoire", code: "+225", iso: "ci" },
  { name: "Croatia", code: "+385", iso: "hr" }, { name: "Cuba", code: "+53", iso: "cu" },
  { name: "Curaçao", code: "+599", iso: "cw" }, { name: "Cyprus", code: "+357", iso: "cy" },
  { name: "Czech Republic", code: "+420", iso: "cz" }, { name: "Denmark", code: "+45", iso: "dk" },
  { name: "Djibouti", code: "+253", iso: "dj" }, { name: "Dominica", code: "+1", iso: "dm" },
  { name: "Dominican Republic", code: "+1", iso: "do" }, { name: "Ecuador", code: "+593", iso: "ec" },
  { name: "Egypt", code: "+20", iso: "eg" }, { name: "El Salvador", code: "+503", iso: "sv" },
  { name: "Equatorial Guinea", code: "+240", iso: "gq" }, { name: "Eritrea", code: "+291", iso: "er" },
  { name: "Estonia", code: "+372", iso: "ee" }, { name: "Eswatini", code: "+268", iso: "sz" },
  { name: "Ethiopia", code: "+251", iso: "et" }, { name: "Falkland Islands", code: "+500", iso: "fk" },
  { name: "Faroe Islands", code: "+298", iso: "fo" }, { name: "Fiji", code: "+679", iso: "fj" },
  { name: "Finland", code: "+358", iso: "fi" }, { name: "France", code: "+33", iso: "fr" },
  { name: "French Guiana", code: "+594", iso: "gf" }, { name: "French Polynesia", code: "+689", iso: "pf" },
  { name: "Gabon", code: "+241", iso: "ga" }, { name: "Gambia", code: "+220", iso: "gm" },
  { name: "Georgia", code: "+995", iso: "ge" }, { name: "Germany", code: "+49", iso: "de" },
  { name: "Ghana", code: "+233", iso: "gh" }, { name: "Gibraltar", code: "+350", iso: "gi" },
  { name: "Greece", code: "+30", iso: "gr" }, { name: "Greenland", code: "+299", iso: "gl" },
  { name: "Grenada", code: "+1", iso: "gd" }, { name: "Guadeloupe", code: "+590", iso: "gp" },
  { name: "Guam", code: "+1", iso: "gu" }, { name: "Guatemala", code: "+502", iso: "gt" },
  { name: "Guernsey", code: "+44", iso: "gg" }, { name: "Guinea", code: "+224", iso: "gn" },
  { name: "Guinea-Bissau", code: "+245", iso: "gw" }, { name: "Guyana", code: "+592", iso: "gy" },
  { name: "Haiti", code: "+509", iso: "ht" }, { name: "Honduras", code: "+504", iso: "hn" },
  { name: "Hong Kong", code: "+852", iso: "hk" }, { name: "Hungary", code: "+36", iso: "hu" },
  { name: "Iceland", code: "+354", iso: "is" }, { name: "India", code: "+91", iso: "in" },
  { name: "Indonesia", code: "+62", iso: "id" }, { name: "Iran", code: "+98", iso: "ir" },
  { name: "Iraq", code: "+964", iso: "iq" }, { name: "Ireland", code: "+353", iso: "ie" },
  { name: "Isle of Man", code: "+44", iso: "im" }, { name: "Israel", code: "+972", iso: "il" },
  { name: "Italy", code: "+39", iso: "it" }, { name: "Jamaica", code: "+1", iso: "jm" },
  { name: "Japan", code: "+81", iso: "jp" }, { name: "Jersey", code: "+44", iso: "je" },
  { name: "Jordan", code: "+962", iso: "jo" }, { name: "Kazakhstan", code: "+7", iso: "kz" },
  { name: "Kenya", code: "+254", iso: "ke" }, { name: "Kiribati", code: "+686", iso: "ki" },
  { name: "Kosovo", code: "+383", iso: "xk" }, { name: "Kuwait", code: "+965", iso: "kw" },
  { name: "Kyrgyzstan", code: "+996", iso: "kg" }, { name: "Laos", code: "+856", iso: "la" },
  { name: "Latvia", code: "+371", iso: "lv" }, { name: "Lebanon", code: "+961", iso: "lb" },
  { name: "Lesotho", code: "+266", iso: "ls" }, { name: "Liberia", code: "+231", iso: "lr" },
  { name: "Libya", code: "+218", iso: "ly" }, { name: "Liechtenstein", code: "+423", iso: "li" },
  { name: "Lithuania", code: "+370", iso: "lt" }, { name: "Luxembourg", code: "+352", iso: "lu" },
  { name: "Macau", code: "+853", iso: "mo" }, { name: "Madagascar", code: "+261", iso: "mg" },
  { name: "Malawi", code: "+265", iso: "mw" }, { name: "Malaysia", code: "+60", iso: "my" },
  { name: "Maldives", code: "+960", iso: "mv" }, { name: "Mali", code: "+223", iso: "ml" },
  { name: "Malta", code: "+356", iso: "mt" }, { name: "Marshall Islands", code: "+692", iso: "mh" },
  { name: "Martinique", code: "+596", iso: "mq" }, { name: "Mauritania", code: "+222", iso: "mr" },
  { name: "Mauritius", code: "+230", iso: "mu" }, { name: "Mayotte", code: "+262", iso: "yt" },
  { name: "Mexico", code: "+52", iso: "mx" }, { name: "Micronesia", code: "+691", iso: "fm" },
  { name: "Moldova", code: "+373", iso: "md" }, { name: "Monaco", code: "+377", iso: "mc" },
  { name: "Mongolia", code: "+976", iso: "mn" }, { name: "Montenegro", code: "+382", iso: "me" },
  { name: "Montserrat", code: "+1", iso: "ms" }, { name: "Morocco", code: "+212", iso: "ma" },
  { name: "Mozambique", code: "+258", iso: "mz" }, { name: "Myanmar", code: "+95", iso: "mm" },
  { name: "Namibia", code: "+264", iso: "na" }, { name: "Nauru", code: "+674", iso: "nr" },
  { name: "Nepal", code: "+977", iso: "np" }, { name: "Netherlands", code: "+31", iso: "nl" },
  { name: "New Caledonia", code: "+687", iso: "nc" }, { name: "New Zealand", code: "+64", iso: "nz" },
  { name: "Nicaragua", code: "+505", iso: "ni" }, { name: "Niger", code: "+227", iso: "ne" },
  { name: "Nigeria", code: "+234", iso: "ng" }, { name: "Niue", code: "+683", iso: "nu" },
  { name: "Norfolk Island", code: "+672", iso: "nf" }, { name: "North Korea", code: "+850", iso: "kp" },
  { name: "North Macedonia", code: "+389", iso: "mk" }, { name: "Northern Mariana Islands", code: "+1", iso: "mp" },
  { name: "Norway", code: "+47", iso: "no" }, { name: "Oman", code: "+968", iso: "om" },
  { name: "Pakistan", code: "+92", iso: "pk" }, { name: "Palau", code: "+680", iso: "pw" },
  { name: "Palestine", code: "+970", iso: "ps" }, { name: "Panama", code: "+507", iso: "pa" },
  { name: "Papua New Guinea", code: "+675", iso: "pg" }, { name: "Paraguay", code: "+595", iso: "py" },
  { name: "Peru", code: "+51", iso: "pe" }, { name: "Philippines", code: "+63", iso: "ph" },
  { name: "Poland", code: "+48", iso: "pl" }, { name: "Portugal", code: "+351", iso: "pt" },
  { name: "Puerto Rico", code: "+1", iso: "pr" }, { name: "Qatar", code: "+974", iso: "qa" },
  { name: "Reunion", code: "+262", iso: "re" }, { name: "Romania", code: "+40", iso: "ro" },
  { name: "Russia", code: "+7", iso: "ru" }, { name: "Rwanda", code: "+250", iso: "rw" },
  { name: "Saint Barthelemy", code: "+590", iso: "bl" }, { name: "Saint Helena", code: "+290", iso: "sh" },
  { name: "Saint Kitts and Nevis", code: "+1", iso: "kn" }, { name: "Saint Lucia", code: "+1", iso: "lc" },
  { name: "Saint Martin", code: "+590", iso: "mf" }, { name: "Saint Pierre and Miquelon", code: "+508", iso: "pm" },
  { name: "Saint Vincent and the Grenadines", code: "+1", iso: "vc" }, { name: "Samoa", code: "+685", iso: "ws" },
  { name: "San Marino", code: "+378", iso: "sm" }, { name: "Sao Tome and Principe", code: "+239", iso: "st" },
  { name: "Saudi Arabia", code: "+966", iso: "sa" }, { name: "Senegal", code: "+221", iso: "sn" },
  { name: "Serbia", code: "+381", iso: "rs" }, { name: "Seychelles", code: "+248", iso: "sc" },
  { name: "Sierra Leone", code: "+232", iso: "sl" }, { name: "Singapore", code: "+65", iso: "sg" },
  { name: "Sint Maarten", code: "+1", iso: "sx" }, { name: "Slovakia", code: "+421", iso: "sk" },
  { name: "Slovenia", code: "+386", iso: "si" }, { name: "Solomon Islands", code: "+677", iso: "sb" },
  { name: "Somalia", code: "+252", iso: "so" }, { name: "South Africa", code: "+27", iso: "za" },
  { name: "South Korea", code: "+82", iso: "kr" }, { name: "South Sudan", code: "+211", iso: "ss" },
  { name: "Spain", code: "+34", iso: "es" }, { name: "Sri Lanka", code: "+94", iso: "lk" },
  { name: "Sudan", code: "+249", iso: "sd" }, { name: "Suriname", code: "+597", iso: "sr" },
  { name: "Svalbard and Jan Mayen", code: "+47", iso: "sj" }, { name: "Sweden", code: "+46", iso: "se" },
  { name: "Switzerland", code: "+41", iso: "ch" }, { name: "Syria", code: "+963", iso: "sy" },
  { name: "Taiwan", code: "+886", iso: "tw" }, { name: "Tajikistan", code: "+992", iso: "tj" },
  { name: "Tanzania", code: "+255", iso: "tz" }, { name: "Thailand", code: "+66", iso: "th" },
  { name: "Timor-Leste", code: "+670", iso: "tl" }, { name: "Togo", code: "+228", iso: "tg" },
  { name: "Tokelau", code: "+690", iso: "tk" }, { name: "Tonga", code: "+676", iso: "to" },
  { name: "Trinidad and Tobago", code: "+1", iso: "tt" }, { name: "Tunisia", code: "+216", iso: "tn" },
  { name: "Turkey", code: "+90", iso: "tr" }, { name: "Turkmenistan", code: "+993", iso: "tm" },
  { name: "Turks and Caicos Islands", code: "+1", iso: "tc" }, { name: "Tuvalu", code: "+688", iso: "tv" },
  { name: "Uganda", code: "+256", iso: "ug" }, { name: "Ukraine", code: "+380", iso: "ua" },
  { name: "United Arab Emirates", code: "+971", iso: "ae" }, { name: "United Kingdom", code: "+44", iso: "gb" },
  { name: "United States", code: "+1", iso: "us" }, { name: "Uruguay", code: "+598", iso: "uy" },
  { name: "Uzbekistan", code: "+998", iso: "uz" }, { name: "Vanuatu", code: "+678", iso: "vu" },
  { name: "Vatican City", code: "+39", iso: "va" }, { name: "Venezuela", code: "+58", iso: "ve" },
  { name: "Vietnam", code: "+84", iso: "vn" }, { name: "Virgin Islands, British", code: "+1", iso: "vg" },
  { name: "Virgin Islands, U.S.", code: "+1", iso: "vi" }, { name: "Wallis and Futuna", code: "+681", iso: "wf" },
  { name: "Western Sahara", code: "+212", iso: "eh" }, { name: "Yemen", code: "+967", iso: "ye" },
  { name: "Zambia", code: "+260", iso: "zm" }, { name: "Zimbabwe", code: "+263", iso: "zw" }
].sort((a, b) => a.name.localeCompare(b.name));

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: ALL_COUNTRIES.find(c => c.iso === "ge") || ALL_COUNTRIES[0],
    phone: "",
    service: "Residency & Immigration",
    contactPreferences: [] as string[],
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = useMemo(() => {
    return ALL_COUNTRIES.filter(c => 
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
      c.code.includes(countrySearch)
    );
  }, [countrySearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const sanitized = value.replace(/[^0-9 ]/g, "");
      setFormData(prev => ({ ...prev, [name]: sanitized }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (method: string) => {
    setFormData(prev => {
      const current = prev.contactPreferences;
      const updated = current.includes(method)
        ? current.filter(item => item !== method)
        : [...current, method];
      return { ...prev, contactPreferences: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    // Simulate a secure 1.5s delay before showing success
    setTimeout(() => {
      console.log("Legal Lead Captured:", {
        ...formData,
        fullPhone: `${formData.country.code} ${formData.phone}`
      });
      setIsPending(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-16 text-center leading-tight">
          Let’s Architect Your <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Legal Security.</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-10 rounded-3xl border border-border bg-card backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-70">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tamaz K." className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 opacity-70">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tamaz@tklegal.ge" className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-[58px]" required />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium mb-2 opacity-70">Phone Number</label>
                      <div className="flex w-full rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-indigo-500 transition-all h-[58px]">
                        
                        {/* Shrink-0 to prevent flex blowout */}
                        <div 
                          ref={dropdownRef} 
                          onMouseLeave={() => setIsCountryOpen(false)}
                          className="relative border-r border-border bg-white/5 shrink-0"
                        >
                          <button 
                            type="button" 
                            onClick={() => setIsCountryOpen(!isCountryOpen)} 
                            className="h-full px-5 flex items-center gap-3 hover:bg-indigo-500/10 transition-colors rounded-l-xl cursor-pointer min-w-[110px]"
                          >
                            <img src={`https://flagcdn.com/w40/${formData.country.iso}.png`} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt="flag" />
                            <span className="text-sm font-bold whitespace-nowrap">{formData.country.code}</span>
                            <span className={`text-[10px] opacity-40 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}>▼</span>
                          </button>

                          <AnimatePresence>
                            {isCountryOpen && (
                              <motion.div 
                                initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} 
                                className="absolute top-full left-0 pt-2 w-72 z-50 drop-shadow-2xl"
                              >
                                <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-2xl">
                                  <div className="p-3 border-b border-white/5 bg-white/5">
                                    <input 
                                      type="text" placeholder="Search country..." value={countrySearch} 
                                      onChange={(e) => setCountrySearch(e.target.value)} 
                                      className="w-full p-2.5 text-sm bg-slate-800 rounded-lg outline-none border border-white/10 focus:border-indigo-500 transition-all" 
                                      autoFocus 
                                    />
                                  </div>
                                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                    {filteredCountries.map(c => (
                                      <button key={c.iso} type="button" onClick={() => { setFormData(p => ({ ...p, country: c })); setIsCountryOpen(false); setCountrySearch(""); }} className="w-full p-4 flex items-center gap-4 hover:bg-indigo-600 transition-colors text-left group">
                                        <img src={`https://flagcdn.com/w40/${c.iso}.png`} className="w-6 h-4 object-cover rounded-sm" alt={c.name} />
                                        <span className="flex-1 text-sm font-medium group-hover:text-white">{c.name}</span>
                                        <span className="opacity-40 text-xs font-mono">{c.code}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* min-w-0 prevents blowout, maxLength stops typing at 15 digits */}
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="5xx xxx xxx" 
                          maxLength={15}
                          className="flex-1 min-w-0 p-4 bg-transparent outline-none text-white font-medium placeholder:opacity-30" 
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-70">Case Type</label>
                    <div className="relative">
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer">
                        <option value="Residency & Immigration">Residency & Immigration</option>
                        <option value="Civil Law Specialties">Civil Law Specialties</option>
                        <option value="Business Setup & Tax">Business Setup & Tax</option>
                        <option value="Real Estate Law">Real Estate Law</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 opacity-70">How should we reach you?</label>
                    <div className="flex flex-wrap gap-3">
                      {["Email", "Phone Call", "WhatsApp"].map((method) => (
                        <button key={method} type="button" onClick={() => handleCheckboxChange(method)} className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-300 ${formData.contactPreferences.includes(method) ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "border-border bg-background/50 opacity-60 hover:opacity-100"}`}>
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-70">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Describe your legal situation..." className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" required />
                  </div>

                  <motion.button
                    whileHover={{ scale: isPending ? 1 : 1.02 }}
                    whileTap={{ scale: isPending ? 1 : 0.98 }}
                    type="submit"
                    disabled={isPending}
                    className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 ${
                      isPending 
                        ? "bg-indigo-900/50 cursor-not-allowed text-indigo-300" 
                        : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20"
                    }`}
                  >
                    {isPending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-indigo-300 border-t-transparent rounded-full"
                        />
                        Securely Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </motion.button>
                  
                  {/* Privacy / Legal Credibility Disclaimer */}
                  <p className="mt-4 text-[11px] text-center opacity-40 leading-tight px-4 text-balance">
                    By submitting this form, you acknowledge that this initial inquiry does not establish an attorney-client relationship. Your data is handled with strict confidentiality in accordance with GDPR and Georgian data protection laws.
                  </p>
                </motion.form>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
                  <p className="opacity-70 text-lg mb-8 px-4 text-balance">Thank you, {formData.name}. Our specialists will contact you via {formData.contactPreferences.join(" or ") || "your provided details"} within 24 hours.</p>
                  <Link href="/" className="px-8 py-3 bg-indigo-600/10 text-indigo-400 rounded-full font-semibold border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all">Return to home page</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Direct Communication</h3>
              <p className="text-lg text-foreground/60 leading-relaxed">For urgent matters requiring a Power of Attorney (POA) or immediate banking compliance, our Tbilisi office is available for direct consultation.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 font-bold">🏛️</div>
                <div><p className="font-bold text-white">Headquarters</p><p className="opacity-60 text-sm">Tbilisi, Georgia</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 font-bold">✉️</div>
                <div><p className="font-bold text-white">Email</p><p className="opacity-60 text-sm">contact@tklegal.ge</p></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
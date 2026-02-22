"use client"

import type React from "react"

import { Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function QuoteRequestForm() {
    const countries = [
        { code: "SG", flag: "https://flagcdn.com/w20/sg.png", name: "Singapore", phoneCode: "+65" },
        { code: "US", flag: "https://flagcdn.com/w20/us.png", name: "United States", phoneCode: "+1" },
        { code: "UK", flag: "https://flagcdn.com/w20/gb.png", name: "United Kingdom", phoneCode: "+44" },
        { code: "IN", flag: "https://flagcdn.com/w20/in.png", name: "India", phoneCode: "+91" },
        { code: "AU", flag: "https://flagcdn.com/w20/au.png", name: "Australia", phoneCode: "+61" },
        { code: "CA", flag: "https://flagcdn.com/w20/ca.png", name: "Canada", phoneCode: "+1" },
        { code: "DE", flag: "https://flagcdn.com/w20/de.png", name: "Germany", phoneCode: "+49" },
        { code: "FR", flag: "https://flagcdn.com/w20/fr.png", name: "France", phoneCode: "+33" },
        { code: "JP", flag: "https://flagcdn.com/w20/jp.png", name: "Japan", phoneCode: "+81" },
        { code: "KR", flag: "https://flagcdn.com/w20/kr.png", name: "South Korea", phoneCode: "+82" },
        // Add more countries as needed
    ];

    const [formData, setFormData] = useState({
        travelMonth: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        selectedCountryCode: "SG",
        additionalInfo: "",
        checkboxes: {
            traveledBefore: false,
            workingWithAgent: false,
            travelAgent: false,
            newsletter: false,
            privacyPolicy: false,
        },
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    const handleCountrySelect = (code: string) => {
        const oldCode = countries.find(c => c.code === formData.selectedCountryCode)?.phoneCode || '';
        const newCode = countries.find(c => c.code === code)?.phoneCode || '';
        const updatedPhone = formData.phone.replace(oldCode, newCode).trim();
        setFormData((prev) => ({
            ...prev,
            selectedCountryCode: code,
            phone: updatedPhone
        }));
        setDropdownOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const selectedCode = countries.find(c => c.code === formData.selectedCountryCode)?.phoneCode || '';
            const userInput = value.startsWith(selectedCode) ? value.slice(selectedCode.length).trim() : value;
            setFormData((prev) => ({
                ...prev,
                phone: userInput,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const toggleCheckbox = (name: keyof typeof formData.checkboxes) => {
        setFormData((prev) => ({
            ...prev,
            checkboxes: {
                ...prev.checkboxes,
                [name]: !prev.checkboxes[name],
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            {/* Travel Date Section */}
            <div>
                <div className="flex items-center justify-between">
                    <label className="text-lg font-bold text-foreground font-sourceSerif ">Travel date</label>
                    <span className="text-textcolor3 text-sm">*Required</span>
                </div>
                <select
                    name="travelMonth"
                    value={formData.travelMonth}
                    onChange={handleInputChange}
                    className="w-full mt-2 outline-none px-3 py-3 placeholder:text-textcolor2 text-textcolor1 border-border2 border-[1px] rounded-md focus:border-myred transition-all duration-300"
                >
                    <option value="">Select your preferred travel month*</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
            </div>

            {/* Personal Details Section */}
            <div className="mt-4">
                <div className="flex items-center justify-between ">
                    <label className="text-lg font-bold text-foreground font-sourceSerif">Personal Details</label>
                    <span className="text-textcolor3 text-sm">*Required</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full outline-none px-3 py-3 placeholder:text-textcolor2 text-textcolor2 font-figtree border-border2 border-[1px] rounded-md focus:border-myred transition-all duration-300 focus:text-textcolor1 text-base"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name *"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full outline-none px-3 py-3 placeholder:text-textcolor2 text-textcolor2 font-figtree border-border2 border-[1px] rounded-md focus:border-myred transition-all duration-300 focus:text-textcolor1 text-base"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full outline-none px-3 py-3 placeholder:text-textcolor2 text-textcolor2 font-figtree border-border2 border-[1px] rounded-md focus:border-myred transition-all duration-300 focus:text-textcolor1 text-base"
                        />
                    </div>
                    <div className="relative">
                        <div className={`flex items-center border-[1px] rounded-md transition-all duration-300 ${isPhoneFocused ? 'border-myred' : 'border-border2'}`}>
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 px-3 py-3 rounded-l-md bg-transparent text-textcolor1 font-figtree focus:outline-none"
                            >
                                <img
                                    src={countries.find(c => c.code === formData.selectedCountryCode)?.flag}
                                    alt={`${countries.find(c => c.code === formData.selectedCountryCode)?.name} flag`}
                                    className="w-5 h-3 object-cover"
                                />
                                <svg className={`w-2 h-2 ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <p>{countries.find(c => c.code === formData.selectedCountryCode)?.phoneCode}</p>
                            </button>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number *"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full outline-none px-3 py-3 placeholder:text-textcolor2 text-textcolor1 font-figtree rounded-md transition-all duration-300"
                                onFocus={() => setIsPhoneFocused(true)}
                                onBlur={() => setIsPhoneFocused(false)}
                            />
                        </div>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border border-border2 rounded-md font-figtree shadow-lg z-10 max-h-48 overflow-y-auto">
                                {countries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country.code)}
                                        className="w-full flex items-center gap-2 px-3 py-2 font-figtree hover:bg-gray-100 text-left"
                                    >
                                        <img
                                            src={country.flag}
                                            alt={`${country.name} flag`}
                                            className="w-5 h-3 object-cover"
                                        />
                                        <span>{country.name}</span>
                                        <span className="ml-auto text-textcolor2 font-figtree">{country.phoneCode}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-4">
                <label className="text-lg font-bold text-foreground mb-2 block font-sourceSerif">Additional Information</label>
                <textarea
                    name="additionalInfo"
                    placeholder="For example, you can tell us where you are looking to go, what you want to see, number of days, number of travellers and also indicate the local currency to be quoted."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full min-h-32 px-3 py-2 outline-none  placeholder:text-textcolor2 text-textcolor2 font-figtree border-border2 border-[1px] rounded-md focus:border-myred transition-all duration-300 focus:text-textcolor1 text-base"
                />
            </div>

            {/* Checkboxes Section */}
            <div className="mt-4">
                <div className="flex items-center justify-between font-sourceSerif">
                    <label className="text-lg font-bold text-foreground">Please tick all that apply</label>
                    <span className="text-textcolor3 text-sm">*Required</span>
                </div>
                <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-3">
                        <div
                            id="traveled"
                            onClick={() => toggleCheckbox('traveledBefore')}
                            className={`h-6 w-6 border border-gray1 rounded-sm cursor-pointer flex items-center justify-center ${formData.checkboxes.traveledBefore ? 'bg-myred' : 'bg-white'}`}
                        >
                            {formData.checkboxes.traveledBefore && <Check className="text-white w-4 h-4" />}
                        </div>
                        <label htmlFor="traveled" onClick={() => toggleCheckbox('traveledBefore')} className="font-normal cursor-pointer">
                            I have traveled with Trafagar before
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            id="agent"
                            onClick={() => toggleCheckbox('workingWithAgent')}
                            className={`h-6 w-6 border border-gray1 rounded-sm cursor-pointer flex items-center justify-center ${formData.checkboxes.workingWithAgent ? 'bg-myred' : 'bg-white'}`}
                        >
                            {formData.checkboxes.workingWithAgent && <Check className="text-white w-4 h-4" />}
                        </div>
                        <label htmlFor="agent" onClick={() => toggleCheckbox('workingWithAgent')} className="font-normal cursor-pointer">
                            I am currently working with a travel agent
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            id="travelAgent"
                            onClick={() => toggleCheckbox('travelAgent')}
                            className={`h-6 w-6 border border-gray1 rounded-sm cursor-pointer flex items-center justify-center ${formData.checkboxes.travelAgent ? 'bg-myred' : 'bg-white'}`}
                        >
                            {formData.checkboxes.travelAgent && <Check className="text-white w-4 h-4" />}
                        </div>
                        <label htmlFor="travelAgent" onClick={() => toggleCheckbox('travelAgent')} className="font-normal cursor-pointer">
                            I am a travel agent
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            id="newsletter"
                            onClick={() => toggleCheckbox('newsletter')}
                            className={`h-6 w-6 border border-gray1 rounded-sm cursor-pointer no-before flex items-center justify-center ${formData.checkboxes.newsletter ? 'bg-myred' : 'bg-white'}`}
                        >
                            {formData.checkboxes.newsletter && <Check className="text-white w-4 h-4" />}
                        </div>
                        <label htmlFor="newsletter" onClick={() => toggleCheckbox('newsletter')} className="font-normal cursor-pointer">
                            Keep me updated on the latest Trafagar news, deals and latest trips
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            id="privacy"
                            onClick={() => toggleCheckbox('privacyPolicy')}
                            className={`h-6 w-6 border border-gray1 rounded-sm cursor-pointer flex items-center justify-center  ${formData.checkboxes.privacyPolicy ? 'bg-myred' : 'bg-white'}`}
                        >
                            {formData.checkboxes.privacyPolicy && <Check className="text-white w-4 h-4" />}
                        </div>
                        <label htmlFor="privacy" onClick={() => toggleCheckbox('privacyPolicy')} className="font-normal cursor-pointer">
                            By checking this box, you accept our{" "}
                            <a href="#" className="text-gray1 underline ">
                                privacy policy
                            </a>
                            *
                        </label>
                    </div>
                </div>
            </div>

        </form>
    )
}

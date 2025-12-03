export const DUMMY_PATIENT = [
  {
    id: "p1",
    name: "Emily Williams",
    gender: "Female",
    age: 28,
    image: "/src/assets/images/Patient-1.png",
    isActive: false
  },
  {
    id: "p2",
    name: "Ryan Johnson",
    gender: "Male",
    age: 34,
    image: "/src/assets/images/Patient-2.png",
    isActive: false
  },
  {
    id: "p3",
    name: "Brandon Mitchell",
    gender: "Male",
    age: 30,
    image: "/src/assets/images/Patient-3.png",
    isActive: false
  },
  {
    id: "p4",
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "/src/assets/images/jessica-taylor.png",
    isActive: true
  },
  {
    id: "p5",
    name: "Samantha Johnson",
    gender: "Female",
    age: 24,
    image: "/src/assets/images/Patient-5.png",
    isActive: false
  },
  {
    id: "p6",
    name: "Ashley Martinez",
    gender: "Female",
    age: 45,
    image: "/src/assets/images/Patient-6.png",
    isActive: false
  },
  {
    id: "p7",
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "/src/assets/images/Patient-7.png",
    isActive: false
  },
  {
    id: "p8",
    name: "Tyler Davis",
    gender: "Male",
    age: 10,
    image: "/src/assets/images/Patient-8.png",
    isActive: false
  },
  {
    id: "p9",
    name: "Kevin Anderson",
    gender: "Male",
    age: 33,
    image: "/src/assets/images/Patient-9.png",
    isActive: false
  },
  {
    id: "p10",
    name: "Dylan Thompson",
    gender: "Male",
    age: 30,
    image: "/src/assets/images/Patient-10.png",
    isActive: false
  },
  {
    id: "p11",
    name: "Nathan Evans",
    gender: "Male",
    age: 32,
    image: "/src/assets/images/Patient-11.png",
    isActive: false
  },
  {
    id: "p12",
    name: "Brian Nelson",
    gender: "Male",
    age: 37,
    image: "/src/assets/images/Patient-12.png",
    isActive: false
  }
];

export const PATIENT = {
  id: "p4",
  name: "",
  profile_picture: "",
  date_of_birth: "N/A",
  gender: "N/A",
  phone_number: "N/A",
  emergency_contact: "N/A",
  insurance_type: "N/A",
  diagnostic_list: [
    { name: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
    { name: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
    { name: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
    { name: "Osteoarthritis", description: "Degenerative joint disease", status: "Untreated" },
    { name: "Allergic Rhinitis", description: "Seasonal allergies causing nasal congestion", status: "Active"},
  ],
  lab_results: ["CT Scan", "X-Ray", "Blood Report", "Urine Test","Radiology Report"],
  diagnosis_history: [
    { month: "Oct", year: 2023, blood_pressure: { systolic: { value: 135, levels: "Higher than Average" }, diastolic: { value: 85, levels: "Higher than Average" } }, respiratory_rate: { value: 18, levels: "Normal" }, temperature: { value: 98.6, levels: "Normal" }, heart_rate: { value: 75, levels: "Normal" } },
    { month: "Nov", year: 2023, blood_pressure: { systolic: { value: 128, levels: "Normal" }, diastolic: { value: 82, levels: "Normal" } }, respiratory_rate: { value: 17, levels: "Normal" }, temperature: { value: 98.4, levels: "Normal" }, heart_rate: { value: 72, levels: "Normal" } }
  ]
};

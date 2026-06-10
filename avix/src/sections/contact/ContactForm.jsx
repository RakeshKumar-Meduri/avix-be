import { useState } from "react"
import mailIcon from "../../assets/images/mail.svg"
import callIcon from "../../assets/images/call.svg"

function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  })

  const [status, setStatus] = useState("") // "", "success", "error"
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: ""
        })
      } else {
        setStatus("error")
      }

    } catch (error) {
      setStatus("error")
    }

    setLoading(false)

    setTimeout(() => {
      setStatus("")
    }, 3000)
  }

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-32">

      {/* STATUS MESSAGE */}
      {status && (
        <div className="w-full flex justify-center mb-6">
          <div
            className={`px-6 py-3 rounded text-white font-medium ${
              status === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status === "success"
              ? "Form submitted successfully!"
              : "Something went wrong. Please try again."}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              Your project
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tell us about it
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Share your vision and we'll craft the right solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src={mailIcon} alt="mail" className="w-6 h-6" />
                <span className="text-lg underline">
                  avixstudio.ax@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img src={callIcon} alt="call" className="w-6 h-6" />
                <span className="text-lg">
                  +91 77025 12704
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-8" onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className="border-b border-gray-400 bg-transparent py-3 outline-none text-lg focus:border-black transition w-full"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="border-b border-gray-400 bg-transparent py-3 outline-none text-lg focus:border-black transition"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="border-b border-gray-400 bg-transparent py-3 outline-none text-lg focus:border-black transition"
              />
            </div>

            <div>
              <label className="block text-lg mb-2 font-medium">
                Which Industry Are You In?
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border-b border-gray-400 bg-transparent py-3 outline-none text-lg w-full focus:border-black transition"
                required
              >
                <option value="">Select Your Industry</option>
                <option value="Real estate">Real estate</option>
                <option value="Start up">Start up</option>
                <option value="E commerce">E commerce</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <p className="mb-4 font-medium text-lg">
                What's your budget range?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                {["Basic project", "Mid-level project", "Premium project", "Not sure yet"]
                  .map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        required
                      />
                      {option}
                    </label>
                  ))}
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2 font-medium">
                Project description
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your project goals and requirements..."
                className="border-b border-gray-400 bg-transparent py-3 outline-none text-lg w-full focus:border-black transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-lg text-white transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
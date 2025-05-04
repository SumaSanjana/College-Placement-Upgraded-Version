import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentProfile() {
  const [form, setForm] = useState({
    name: '',
    cgpa: '',
    degree: '',
    institution: '',
    year: '',
    phone: '',
    address: '',
    resume: null
  });
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        const profileData = res.data;
        setProfile(profileData);
        setForm({
          name: profileData.name || '',
          cgpa: profileData.cgpa || '',
          degree: profileData.academicDetails?.degree || '',
          institution: profileData.academicDetails?.institution || '',
          year: profileData.academicDetails?.year || '',
          phone: profileData.personalDetails?.phone || '',
          address: profileData.personalDetails?.address || '',
          resume: null
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || (!form.resume && !profile?.resume)) {
      setError('Name and resume are required');
      return;
    }

    const formData = new FormData();
    formData.append('profile[name]', form.name);
    if (form.cgpa) formData.append('profile[cgpa]', form.cgpa);
    if (form.degree) formData.append('profile[academicDetails][degree]', form.degree);
    if (form.institution) formData.append('profile[academicDetails][institution]', form.institution);
    if (form.year) formData.append('profile[academicDetails][year]', form.year);
    if (form.phone) formData.append('profile[personalDetails][phone]', form.phone);
    if (form.address) formData.append('profile[personalDetails][address]', form.address);
    if (form.resume) formData.append('resume', form.resume);

    try {
      const res = await axios.post('http://localhost:5000/api/student/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setProfile(res.data);
      setForm({
        ...form,
        resume: null
      });
      alert('Profile updated successfully');
      setError('');
    } catch (err) {
      setError(err.response?.data.message || 'Error updating profile');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {loading ? (
        <p className="text-center">Loading profile...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Display */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Current Profile</h2>
            {profile ? (
              <div className="space-y-2">
                <p><strong>Name:</strong> {profile.name || 'Not set'}</p>
                <p><strong>CGPA:</strong> {profile.cgpa || 'Not set'}</p>
                <p><strong>Degree:</strong> {profile.academicDetails?.degree || 'Not set'}</p>
                <p><strong>Institution:</strong> {profile.academicDetails?.institution || 'Not set'}</p>
                <p><strong>Year:</strong> {profile.academicDetails?.year || 'Not set'}</p>
                <p><strong>Phone:</strong> {profile.personalDetails?.phone || 'Not set'}</p>
                <p><strong>Address:</strong> {profile.personalDetails?.address || 'Not set'}</p>
                {profile.resume ? (
                  <div>
                    <p><strong>Resume:</strong></p>
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Resume
                    </a>
                  </div>
                ) : (
                  <p><strong>Resume:</strong> Not uploaded</p>
                )}
              </div>
            ) : (
              <p>No profile data available. Please update your profile.</p>
            )}
          </div>

          {/* Update Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label>CGPA</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={form.cgpa}
                  onChange={(e) => setForm({ ...form, cgpa: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Degree</label>
                <input
                  type="text"
                  value={form.degree}
                  onChange={(e) => setForm({ ...form, degree: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Institution</label>
                <input
                  type="text"
                  value={form.institution}
                  onChange={(e) => setForm({ ...form, institution: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Year</label>
                <input
                  type="number"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label>Resume</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
                  className="w-full border p-2 rounded"
                />
                {profile?.resume && <p className="text-sm text-gray-500 mt-1">Current resume uploaded. Select a new file to replace.</p>}
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
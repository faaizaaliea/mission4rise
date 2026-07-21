import api from "./axios";
const normalize = (course) => ({
  ...course,
  id: course.id ?? course._id,
});

export const getCourses = async () => {
  const res = await api.get("/course");
  return res.data.map(normalize);
};

export const addCourse = async (course) => {
  const res = await api.post("/course", course);
  return normalize(res.data);
};

export const updateCourse = async (id, course) => {
  const res = await api.put(`/course/${id}`, course);
  return normalize(res.data);
};

export const deleteCourse = async (id) => {
  return api.delete(`/course/${id}`);
};

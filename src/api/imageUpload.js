export const getImageUrl = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url =
    "https://api.imgbb.com/1/upload?&key=8607004e8e99ab488492442fbe21b91d";
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data.data.display_url;
};

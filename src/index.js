import "./styles.css";
import "./index.js";

window.ml = cloudinary.createMediaLibrary(
  {
    cloud_name: "YOUR_CLOUD_NAME",
    api_key: "YOUR_API_KEY",
    remove_header: false,
    max_files: "1",
    insert_caption: "Insert",
    inline_container: "#widget_container",
    default_transformations: [[]],
    button_class: "myBtn",
    button_caption: "Select Image or Video"
  },
  {
    insertHandler: function (data) {
      data.assets.forEach((asset) => {
        console.log("Inserted asset:", JSON.stringify(asset, null, 2));
      });
    }
  },
  document.getElementById("open-btn")
);

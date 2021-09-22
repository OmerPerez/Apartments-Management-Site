import React from "react";
import "./TenantStyle.css";

export default function ProfileImage() {
  return (
    <div class="row loggedin_user">
      <div class="col-sm-3 col-md-3">
        <div class="user_profile">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        </div>
      </div>
    </div>
  );
}

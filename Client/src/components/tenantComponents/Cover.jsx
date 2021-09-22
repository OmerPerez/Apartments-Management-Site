import React from "react";
import "./TenantStyle.css";

export default function Cover({ name }) {
  return (
    <div class="tenant-cover">
      <h1> {name} </h1>
    </div>
  );
}

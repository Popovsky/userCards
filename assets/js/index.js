"use strict";

import DataLoader from "./DataLoader.js";
import renderUserCardWrapper from "./renderUserCardWrapper";

const dataLoader = new DataLoader();

dataLoader.addEventListener("load", onDataLoadHandler);

dataLoader.src = "./persons.json";

function onDataLoadHandler(e) {
    const data = e.detail;
    for (const item of data) {
        renderUserCardWrapper(item);
    }
}

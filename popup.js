// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const resultsContainer = document.querySelector('#results-container');

function sendRequest(url, method, body, callback) {
  let r = new XMLHttpRequest();
  r.addEventListener("readystatechange", showResults);
  r.open(method, url);
  r.setRequestHeader('Content-Type', 'application/json');
  r.send(body);
}

function showResults() {
  let result = 'Loading...';
  if (this.readyState === 2) result = 'Sent';
  if (this.readyState === 3) result = 'Loading...';
  if (this.readyState === 4) {
    result = `<pre>${JSON.stringify(JSON.parse(this.responseText), null, ' ')}</pre>`;
  }
  resultsContainer.innerHTML = result;
}

function handleDOMLoad() {
  const requestForm = document.querySelector('#request-form');

  requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    sendRequest(form.url.value, form.method.value, form.bodyInput.value, showResults);
  });
}

document.addEventListener('DOMContentLoaded', handleDOMLoad);

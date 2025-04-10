---
layout: lapiduxProxySample
title:  "Lapidux Proxy Verification"
---
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col">
        <div class="input-group">
            <textarea id="inputIps" class="form-control ipInput" placeholder="Input IP:Port values here"></textarea>
        </div>
    </div>
    <div class="col-md-auto">
        <!-- HTTP
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="httpSockSwitch">
            <label class="custom-control-label" for="httpSockSwitch">Socks</label>
          </div>
        <br> -->
        <br>
        <div class="input-group">
            <select class="custom-select" id="inputType">
                <option selected value="Http(s)">Http(s)</option>
                <option value="Socks4">Socks4</option>
                <option value="Socks5">Socks5</option>
            </select>
        </div>
        <br>
        <button class="btn btn-primary" id="uploadIp" onclick="uploadIp()"> Upload to Server </Button>
    </div>
    <div class="col">
        <div class="input-group">
            <textarea id="outputIps" class="form-control ipInput" placeholder="Server results comes here..."></textarea>
        </div>
    </div>
  </div>
</div>
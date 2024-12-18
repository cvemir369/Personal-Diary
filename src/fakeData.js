const initializeFakeData = () => {
  // Check if data already exists in localStorage
  if (!localStorage.getItem("myFakeData")) {
    const fakeData = [
      { id: 1, title: "my title", img: "https://img.playbook.com/YwVKC-ScDZRm-X86Plbwdsj0Y7Pnv7ywY3xIDyXLsPc/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8xNzlkZjY0Ny0y/YTFkLTQ5OGYtOTAx/OS03MGNiZGJiNDVl/OTI.webp", desc: "dasd daseas" },
      { id: 2, title: "my title 2", img: "https://img.playbook.com/MVoqIFOSN9Zs2e8EIHX0kv86LuAgvrfsY0CdRsiozqs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9hYmFmYzg3NS00/MDcxLTRjNTktODEx/Ni05ZDRhNWNjZGE1/ZjQ.webp", desc: "2dasd daseas" },
      { id: 3, title: "my title 3", img: "https://img.playbook.com/JI1divewxq6vHf_5bVmAT9bVoSIYXCmSvDhuy6ICVGs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9hYmYxOGJjNy03/MWMyLTQ5NzUtODQw/Ny1lOWI1ZDJlZTgz/ZmI.webp", desc: "3dasd daseas" },
      { id: 4, title: "my title 4", img: "https://img.playbook.com/Ms92EKv6XENqfAQpi1x_IsvIEQNF8XaUYUEAXz3N-FE/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wZWQ2/NDQ3OC1hZjk1LTRj/NjktODIxMy0zM2Nm/ZDQ0ZmM5ZWI.webp", desc: "4dasd daseas" },
      { id: 5, title: "my title 5", img: "https://img.playbook.com/lDjLPH37fN9mMZFNZT9KCWALCJva7MkUdpifwfUeSaQ/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wNDJlOTU3OC0z/ZDUyLTRmNTMtODI0/NC02NDU0YjkyZDY1/YWM.webp", desc: "5dasd daseas" },
    ];
    // Save fake data to localStorage
    localStorage.setItem("myFakeData", JSON.stringify(fakeData));
    console.log("Fake data initialized in localStorage.");
  } else {
    console.log(localStorage.getItem("myFakeData"));
  }
};

export default initializeFakeData;

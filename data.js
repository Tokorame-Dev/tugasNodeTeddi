var fs = require("fs");

exports.test = function () {
  let obj = JSON.parse(fs.readFileSync("ready.json", "utf8"));
  return obj;
};

exports.readBook = function () {
  let nilai = fs.readdirSync("./src");
  return nilai;
};

exports.addBook = function (nameFile) {
  try {
    let nilai = fs.writeFileSync(
      `./src/${nameFile}.json`,
      `{"data":[{
            "name":"Ted",
            "alamat":"Bali",
            "id":1
        }]}`
    );
    return `succes add file that name is ${nameFile}.json`;
  } catch (error) {
    return error;
  }
};

exports.deleteBook = function (nameFile) {
  try {
    let nilai = fs.unlinkSync(`./src/${nameFile}.json`, "");
    return `succes delete file that name is ${nameFile}.json`;
  } catch (error) {
    return error;
  }
};

exports.renameBook = function (oldFile, newFile) {
  try {
    let nilai = fs.renameSync(`./src/${oldFile}.json`, `./src/${newFile}.json`);
    return `succes rename file from ${oldFile} to ${newFile}.json`;
  } catch (error) {
    return error;
  }
};

exports.seeBook = function (nameFile) {
  try {
    let obj = JSON.parse(fs.readFileSync(`./src/${nameFile}.json`, "utf8"));
    return `success menampilkan Data : ${JSON.stringify(obj)}`;
  } catch (error) {
    return error;
  }
};

exports.addBookData = function (nameFile, name, alamat) {
  let nilai = JSON.parse(fs.readFileSync(`./src/${nameFile}.json`, "utf8"));
  let arr = nilai.data;
  let id = 1;

  try {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].id);
      if (arr[i].id >= id) {
        id = arr[i].id + 1;
      }
    }

    let rek = {
      name: name,
      alamat: alamat,
      id: id,
    };
    arr.push(rek);

    let obj = fs.writeFileSync(`./src/${nameFile}.json`, JSON.stringify(nilai))
    return `success add data broo : ${JSON.stringify(nilai)}`;
  } catch (error) {
    return error;
  }
};

exports.renameBookData = function (nameFile, id, name, alamat) {
    let nilai = JSON.parse(fs.readFileSync(`./src/${nameFile}.json`, 'utf8'))
    let arr = nilai.data

    try {
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id.toString() === id) {
                console.log(arr[i])
                let data = arr[i]
                if (name) {
                    data.name = name
                } else {
                    data.name = arr[i].name
                } 
                if (alamat) {
                    data.alamat = alamat
                } else {
                    data.alamat = arr[i].alamat
                }
                arr[i] = data
            }
        }
    
        let obj = fs.writeFileSync(`./src/${nameFile}.json`, JSON.stringify(nilai))
        return `success rename data broo : ${JSON.stringify(nilai)}`;
    } catch (error) {
        return error;
    }
}

exports.deleteBookData = function (nameFile, id) {
    let nilai = JSON.parse(fs.readFileSync(`./src/${nameFile}.json`, 'utf8'))
    let arr = nilai.data
    try {
        // console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id.toString() === id) {
                console.log(arr[i])
                arr.splice(i, 1)
            }
        }
        let obj = fs.writeFileSync(`./src/${nameFile}.json`, JSON.stringify(nilai))
        return `success delete data broo dengan id : ${id}`;
    } catch (error) {
        return error;
    }
}


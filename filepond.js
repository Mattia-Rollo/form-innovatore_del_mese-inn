FilePond.registerPlugin(
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
FilePond.setOptions({
  // allowDrop: true,
  // allowReplace: true,
  imagePreviewMinHeight: 50,
  imagePreviewMaxHeight: 150,
  instantUpload: false,
  dropOnPage: true,
  dropValidation: true,
  // ignoredFiles: [".ds_store", "thumbs.db", "desktop.ini"],
  // allowFileTypeValidation: true,
  acceptedFileTypes: ['image/png', 'image/jpeg'],
  labelFileTypeNotAllowed: "Il file non è di tipo valido",

  maxFileSize: "1MB",
  labelMaxFileSize: "max. {filesize}",
  // onprocessfileerror: function (error, file) {
  //   alert("Errore durante il caricamento del file: " + error);
  // },
  // labelFileProcessingCompleteError:
  //   "Si è verificato un errore durante il caricamento del file.",
  // labelFileProcessingAbortedError: "Il caricamento del file è stato annullato.",
  // labelFileProcessingError:
  //   "Si è verificato un errore durante il caricamento del file.",
  labelMaxFileSizeExceeded: "Attenzione Il file è troppo grande!",
  // plugins: [FilePondPluginFileValidateSize],
  labelIdle:
    "Trascina e rilascia qui i tuoi file oppure <span class='filepond--label-action'>Sfoglia</span><br>max. 1MB file .jpg, .png",
});

FilePond.parse(document.body);
// console.log(FilePond.getOptions());

import { CircularProgress } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import React from 'react';
import { buildInputFile, execute, loadImageElement } from 'wasm-imagemagick';

type FileType = 'png' | 'jpg' | 'gif';

interface Props {
  /** The file type you wish to convert to. */
  targetFileType: FileType;
}

function convertImage(file: File, fileType: FileType): {};

const Converter: React.FC<Props> = () => {
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  return loading ? <CircularProgress /> : <Dropzone></Dropzone>;
};

export default Converter;

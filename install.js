module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/MegaTTS app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          conda: "tts_env",                // Edit this to customize the conda folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
          // triton: true   // uncomment this line if your project requires triton
          // sageattention: true   // uncomment this line if your project requires sageattention
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        conda: "tts_env",                // Edit this to customize the conda folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "conda install -c conda-forge pynini==2.1.6 -y",
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt",
          "uv pip install WeTextProcessing"
        ]
      }
    },
    {
      id: 'end',
      method: 'input',
      params: {
        title: "Install Complete!!",
        description: "Install Complete."
      }
    },
  ]
}

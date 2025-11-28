all_metadata["iwltbaparapahol/0"] = {
  "sui_image_params": {
    "prompt": "Shizuko crouches in the pre-dawn silence of the Colosseum, her fingertips tracing the cold, cracked stone of the arena wall. Her short, brown hair, adorned with simple rings, catches the first weak rays of sunlight. She reaches toward a single, dew-kissed bush, her long sleeves brushing against the weathered surface.",
    "pbprompt": "",
    "model": "z_image_turbo_bf16",
    "seed": 2101989528,
    "steps": 9,
    "cfgscale": 1.0,
    "aspectratio": "2:3",
    "width": 1248,
    "height": 1824,
    "sidelength": 1536,
    "sampler": "euler_ancestral",
    "scheduler": "beta",
    "refinercontrolpercentage": 0.5,
    "refinermethod": "PostApply",
    "refinerupscale": 1.5,
    "refinerupscalemethod": "model-4x-UltraSharpV2_Lite.safetensors",
    "automaticvae": true,
    "mpusecache": true,
    "mpgeneratewildcardseed": false,
    "mpmodelid": "deepseek/deepseek-v3.2-exp",
    "mpinstructions": "custom-1761622486861",
    "autobreak": false,
    "cleanupprompts": true,
    "segmentmaskblur": 15,
    "segmentmaskgrow": 10,
    "segmentmaskoversize": 50,
    "lutname": "LUTs by IWLTBAP (CUBE)/BONUS/Arapaho/IWLTBAP Arapaho - LOG.cube",
    "lutlutstrength": 0.0,
    "lutlogspace": false,
    "colorcorrectionbehavior": "Linear2",
    "refinermodel": "z_image_turbo_bf16",
    "refinersteps": 9,
    "refinercfgscale": 1.0,
    "refinersampler": "euler",
    "refinerscheduler": "beta",
    "segmentsteps": 9,
    "segmentcfgscale": 1.0,
    "sigmashift": 7.0,
    "wildcardseed": 2101989528,
    "negativeprompt": "",
    "swarm_version": "0.9.7.2"
  },
  "sui_extra_data": {
    "date": "2025-11-28",
    "used_wildcards": [
      "characters/girl/x779",
      "_bundles/locations",
      "_bundles/action-scenes",
      "_bundles/cute_details",
      "actions"
    ],
    "original_prompt": "<mpprompt:\nSTYLE IS NONE.\n<comment:<wc:weird/character-type> in a <wc:weird/garment> with <wc:weird/material>, with <wc:weird/conceptual> reflected within. <wc:weird/location>, <wc:weird/visual-signature>. The background is <wc:weird/background>, <wc:weird/adjective>, <wc:weird/adjective>.>\n<random:<wc:characters/girl/cyberharem>||<wc:characters/girl/x779>||<wc:characters/girl/noobai-xl_danbooru>||<wc:characters/girl/n-arno-1girl>||<wc:characters/girl/noob-wiki>||<wc:characters/girl/ethanar>||woman, <wc:clothes/detailed_outfits>>.\n<comment:<random:<wc:_bundles/creatures>||<wc:characters/no-human/noobai-xl_danbooru>||<wc:characters/no-human/noob-wiki>>.>\n<wc:_bundles/locations>.\n<wc:_bundles/action-scenes>.\n<comment:plants: <wc:plants>.>\n<comment:flowers: <wc:flowers>.>\n<wc:_bundles/cute_details>.\nAction is: <wc:actions>.\n>\n<param[sigma shift]:7>",
    "prep_time": "2.32 sec",
    "generation_time": "0.30 sec"
  },
  "sui_models": [
    {
      "name": "z_image_turbo_bf16.safetensors",
      "param": "model",
      "hash": "0xf0660776d3ec870bf0a5f74497e7e6e324fb207b9d257265de896af06fd93d30"
    },
    {
      "name": "z_image_turbo_bf16.safetensors",
      "param": "refinermodel",
      "hash": "0xf0660776d3ec870bf0a5f74497e7e6e324fb207b9d257265de896af06fd93d30"
    }
  ]
}

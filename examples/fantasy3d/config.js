const identification = {
    name: "FANTASY 3D®"
};

const exampleConfig = {
    "FANTASY_3D_SCENE": {
        name: "场景",
        name_en: "Scene",
        content: {
           "FANTASY_3D_SCENE_BACKGROUND": {
                name: "场景背景",
                name_en: "Scene Background",
                content: [{
                    name: "场景背景",
                    name_en: "Scene Background",
                    thumbnail: 'example_scene_background.png',
                    fileName: 'example_scene_background'
                },{
                    name: "透明背景",
                    name_en: "Transparent Scene Background",
                    thumbnail: "example_scene_transparent_background.png",
                    fileName: "example_scene_transparent_background"
                }]
           },
           "FANTASY_3D_SCENE_ENVIRONMENT": {
                name: "场景环境",
                name_en: "Scene Environment",
                content: [{
                    name: "场景环境",
                    name_en: "Scene Environment",
                    thumbnail: "example_scene_environment.png",
                    fileName: "example_scene_environment"
                }]
           },
           "FANTASY_3D_SCENE_MULTIPLE": {
                name: "多场景",
                name_en: "Multiple Scene",
                content: [{
                    name: '多场景',
                    name_en: "Multiple Scene",
                    thumbnail: "example_scene_multiple.png",
                    fileName: "example_scene_multiple"
                }]
           }
        }
    },
    "FANTASY_3D_CAMERA": {
        name: "相机",
        name_en: "Camera",
        content: {
            "FANTASY_3D_CAMERA": {
                name: "相机",
                name_en: "Perspective Camera",
                content: [{
                    name: "透视相机",
                    name_en: "Perspective Camera",
                    thumbnail: "example_camera.png",
                    fileName: "example_camera_perspective"
                },{
                    name: "正交相机",
                    name_en: "Orthographic Camera",
                    thumbnail: "example_camera.png",
                    fileName: "example_camera_orthographic"
                },{
                    name: "多相机",
                    name_en: "Multiple Camera",
                    thumbnail: "example_camera.png",
                    fileName: "example_camera_multiple"
                },{
                    name: "渲染到纹理",
                    name_en: "Render To Target",
                    thumbnail: "example_camera_render_to_target.png",
                    fileName: "example_camera_render_to_target"
                },{
                    name: "渲染相机深度",
                    name_en: "Render Camera Depth",
                    thumbnail: "example_camera_render_depth.png",
                    fileName: "example_camera_render_depth"
                }]
            },
            "FANTASY_3D_CAMERA_CONTROLLER": {
                name: "相机控制器",
                name_en: "Camera Controller",
                content: [{
                    name: "OrbitController",
                    name_en: "OrbitController",
                    thumbnail: "example_camera.png",
                    fileName: "example_camera_controller_orbit"
                }]
            }
        }
    },
    "FANTASY_3D_LIGHT": {
        name: "灯光",
        name_en: "Light",
        content: {
            "FANTASY_3D_LIGHT": {
                name: "灯光",
                name_en: "Light",
                content: [{
                    name: "环境光",
                    name_en: "Ambient Light",
                    thumbnail: "example_ambient_light.png",
                    fileName: "example_light_ambient"
                },{
                    name: "方向光",
                    name_en: "Directional Light",
                    thumbnail: "example_directional_light.png",
                    fileName: "example_light_directional"
                },{
                    name: "点光",
                    name_en: "Point Light",
                    thumbnail: "example_point_light.png",
                    fileName: "example_light_point"
                },{
                    name: "聚光灯",
                    name_en: "Spot Light",
                    thumbnail: "example_spot_light.png",
                    fileName: "example_light_spot"
                },{
                    name: "区域光",
                    name_en: "RectArea Light",
                    thumbnail: "example_rectarea_light.png",
                    fileName: "example_light_rectarea"
                }]
            }
        }
    },
    "FANTAYS_3D_COMPONENT": {
        name: "组件",
        name_en: "Component",
        content: {
            "FANTASY_3D_COMPONENT": {
                name: "组件",
                name_en: "Component",
                content: [{
                    name: "Text",
                    name_en: "Text",
                    thumbnail: "example_component_text.png",
                    fileName: "example_component_text"
                }]
            },
            "FANTASY_3D_COMPONENT_SHADOW": {
                name: "阴影",
                name_en: "Shadow",
                content: [{
                    name: "Contact Shadows",
                    name_en: "Contact Shadows",
                    thumbnail: "example_component_contact_shadows.png",
                    fileName: "example_component_contact_shadows"
                },{
                    name: "Progressive Shadows",
                    name_en: "Progressive Shadows",
                    thumbnail: "example_component_progressive_shadows.png",
                    fileName: "example_component_progressive_shadows"
                }]
            }
        }
    },
    "FANTASY_3D_POSTPROCESSING": {
        name: "后期效果",
        name_en: "Postprocessing",
        content: {
            "FANTASY_3D_POSPROCESSING_BLOOM": {
                name: "泛光",
                name_en: "Bloom",
                content: [{
                    name: "泛光",
                    name_en: "Bloom",
                    thumbnail: "example_postprocessing_bloom.png",
                    fileName: "example_postprocessing_bloom"
                }]
            }
        }
    }
};

let exampleIconConfig = {
    "control": "fa-sliders"
};
window.f3ExampleConfig = exampleConfig;
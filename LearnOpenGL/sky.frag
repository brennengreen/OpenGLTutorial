#version 330 core
out vec4 FragColor;

in vec3 TexCoords;

uniform samplerCube skybox;
uniform float ambientStrength;

void main()
{    //texture(skybox, TexCoords)
    FragColor = texture(skybox, TexCoords) * ambientStrength;
}
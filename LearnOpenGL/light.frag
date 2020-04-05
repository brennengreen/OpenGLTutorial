#version 330 core
out vec4 FragColor;

in vec2 TexCoords;


uniform sampler2D texture_diffuse1;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
	vec4 diffuse = texture(texture_diffuse1, TexCoords);
    FragColor = vec4(diffuse.xyz * lightColor, 1.0f);
}
#version 330 core

in vec2 UV;

out vec4 FragColor;


uniform sampler2D texSampler;

void main()
{
    FragColor = texture(texSampler, UV);
    FragColor = vec4(0.5f, 0.5f, 0.5f, 1.0f);
}
import { G, Path, Svg } from "react-native-svg"

export const FavoriteIcon1 = ({ color = '#323743', fill }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 15 14" fill={fill || 'none'}>
            <Path
                d="M6.55689 12.0199L6.55617 12.0193C4.67274 10.3114 3.15003 8.9295 2.09215 7.63615C1.04001 6.34981 0.5 5.21213 0.5 4.00136C0.5 2.03674 2.03674 0.5 4.00136 0.5C5.11585 0.5 6.19333 1.02126 6.89453 1.84469L7.2752 2.29172L7.65588 1.84469C8.35708 1.02126 9.43455 0.5 10.549 0.5C12.5137 0.5 14.0504 2.03674 14.0504 4.00136C14.0504 5.21214 13.5104 6.34984 12.4581 7.63719C11.4005 8.93119 9.87829 10.3144 7.99553 12.0254L7.99492 12.0259L7.99384 12.0269L7.27648 12.675L6.55689 12.0199Z"
                stroke={color}
            />
        </Svg>
    )
}


export const FavoriteIcon2 = ({ fill }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill={fill || 'none'} xmlns="http://www.w3.org/2000/svg">
            <G id="Iconly/Two-tone/Heart">
                <G id="Heart">
                    <G id="Stroke 1">
                        <Path fill-rule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="#3E4554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <Path fill-rule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </G>
                    <G id="Stroke 3" opacity="0.4">
                        <Path d="M16 6.7C17.07 7.046 17.826 8.001 17.917 9.122" stroke="#3E4554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <Path d="M16 6.7C17.07 7.046 17.826 8.001 17.917 9.122" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </G>
                </G>
            </G>
        </Svg>

    )
}
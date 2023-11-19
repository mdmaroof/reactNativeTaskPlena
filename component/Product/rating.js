import { View } from "react-native"
import { RatingStarFull, RatingStarHalf } from "../../assets/svg/ratingStar"

export default Rating = ({data}) => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
            {Array(5).fill(null).map((z, i) => {
                if ((i + 0.5) < data?.rating && (i + 1) < data?.rating) {
                    return <RatingStarFull key={i} color={'#F9B023'} />
                }
                if ((i + 0.5) < data?.rating) {
                    return <RatingStarHalf key={i} />
                }
                return <RatingStarFull key={i} />
            })}
            {/* 
        <RatingStarFull />
        <RatingStarFull />
        <RatingStarFull /> */}
            {/* <RatingStarHalf /> */}
            {/* <Text>{data?.rating}</Text> */}
        </View>
    )
}
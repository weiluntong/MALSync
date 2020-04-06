package MALSync
import MALSync.ExternalSystems.MyAnimeList

fun main(args: Array<String>) {
    val mal: MyAnimeList = MyAnimeList()
    println(mal.bar())
}

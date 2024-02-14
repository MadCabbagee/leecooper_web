import java.util.ArrayList;

class Playlist {

  public static void main(String[] args) {

    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();

    desertIslandPlaylist.add("Rap");
    desertIslandPlaylist.add("Seaker Pimps - Six Underground");
    desertIslandPlaylist.add("Classic Rock");
    desertIslandPlaylist.add("my eyes hurt");
    desertIslandPlaylist.add("coding music");
    desertIslandPlaylist.add("drunk man");

    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());
    System.out.println(desertIslandPlaylist.remove("Sneakers Pimps - Six UnderGround"));

    int IndexA = desertIslandPlaylist.indexOf("Sneaker Pimps - Six UnderGround");
    int IndexB = desertIslandPlaylist.indexOf("drunk man");

    desertIslandPlaylist.set(IndexA, "A tribe called the legion");

    desertIslandPlaylist.set(IndexB, "The app for your own protection");

  }

}
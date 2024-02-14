public class Reservation {
  int guestCount;
  int restaurantCapacity;
  boolean isRestaurantOpen;
  boolean isConfirmed;

  public Reservation(int count, int capacity, boolean open) {
    if (count < 1 || count > 8) {
      System.out.println("Invalid reservation!");
    }
    guestCount = count;
    restaurantCapacity = capacity;
    isRestaurantOpen = open;
  }

  public void confirmReservation() {
    if (restaurantCapacity >= guestCount && isRestaurantOpen) {
      System.out.println("Reservation confirmed");
      isConfirmed = true;
    } else {
      System.out.println("Reservation denied");
      isConfirmed = false;
    }
  }

  public void informUser() {
    if (!isConfirmed) {
      System.out.println("Unable to confirm reservation, please contact restaurant.");
    } else {
      System.out.println("Please enjoy your meal!");
    }
  }

  public static void main(String[] args) {
    // Create instances here

  }
}

/*
 * import java.util.Arrays;
 * 
 * public class Classroom {
 * 
 * public static void main(String[] args){
 * String[] students = {"Sade", "Alexus", "Sam", "Koma"};
 * double[] mathScores = new double[4];
 * mathScores[0] = 94.5;
 * mathScores[2] = 76.8;
 * 
 * System.out.println("The number of students in the class is " +
 * students.length + ".");
 * }
 * }
 */

/*
 * public static void main(String[] args) {
 * 
 * ArrayList<Double> expenses = new ArrayList<Double>();
 * expenses.add(74.46);
 * expenses.add(63.99);
 * expenses.add(10.57);
 * expenses.add(81.37);
 * 
 * double total = 0;
 * 
 * // Iterate over expenses
 * for (int i = 0; i < expenses.size(); i++) {
 * 
 * total += expenses.get(i);
 * 
 * }
 * 
 * System.out.println(total);
 * 
 * }
 * }
 */
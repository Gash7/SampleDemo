package utility;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.CopyUtils;
import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;


public class UtilityTakeScreenShot {

	public static void main(WebDriver driver) throws InterruptedException, IOException {
		
	TakesScreenshot srcShot = (TakesScreenshot)driver;
	File srcFile = srcShot.getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(srcFile, new File("./ScreenShot/image.png"));
		
	}
}
